import pool from "../db.js";
import bcrypt from "bcryptjs";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";
// const { body, validationResult } = require('express-validator');
export const register = async (req, res) => {
  try {
    //grabbing user details
    const {
      firstName,
      lastName,
      username,
      age,
      location,
      email,
      phoneNumber,
      password,
    } = req.body;
    console.log(username);
    // Check if username already exists
    const userExists = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: "Username already exists." });
    }
    // Hash the password
    //check if first user. make first user admin
    const isFirstUser = await pool.query("SELECT COUNT(id) FROM users");
    let role = "";
    if (isFirstUser.rows[0].count < 1) role = "admin";
    else role = "volunteer";
    // console.log(isFirstUser.rows[0].count);
    console.log(role);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await pool.query(
      "INSERT INTO users(first_name, last_name, username, age, location, email, phone_number, password, role) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        firstName,
        lastName,
        username,
        Number(age),
        location,
        email,
        phoneNumber,
        hashedPassword,
        role,
      ]
    );

    const newUserId = newUser.rows[0].id;
    if (role === "volunteer") {
      const newVolunteer = await pool.query(
        `INSERT INTO volunteer_profiles (user_id, assigned_crisis, tasks, task_location, status)
           VALUES ($1, $2, $3, $4, $5)`,
        [newUserId, null, "none", location || null, "pending approval"] // Handle optional values for age and location
      );
    }
    // console.log(req.body);
    res.send("User Registered");
    // res.json(isFirstUser.rows[0]);
    // // res.send(req.body);
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Check if the user exists
    const userQuery = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (userQuery.rows.length === 0) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const user = userQuery.rows[0];

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    //creating JWT token for loggedin status
    const token = createJWT({ userId: user.id, role: user.role });
    // res.json({ token });
    const oneDay = 1000 * 3600 * 24;
    //storing token as a cookie
    res.cookie("token", token, {
      httpOnly: true, //causes the browser to automatically send the token with every request
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ msg: "user logged in" });
    console.log(`logged in user:${username}`);

    // res.send("User logged in");
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ msg: "user logged out!" });
};

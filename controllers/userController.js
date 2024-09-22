import { StatusCodes } from "http-status-codes";
import pool from "../db.js";

//to get user info to the frontend
export const getCurrentUser = async (req, res) => {
  const user = await pool.query("SELECT * FROM users WHERE id=$1", [
    req.user.userId,
  ]);
  res.json(user.rows[0]);
};

//admin route
export const getStats = async (req, res) => {
  try {
    const users = await pool.query("SELECT COUNT(id) FROM users");
    res.status(200).json(users.rows[0]);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await pool.query("DELETE FROM users WHERE id=$1;", [
      id,
    ]);
    if (!deletedUser) {
      return res.status(400).json({ error: "No user with given ID exists." });
    }
    res.json({ message: `User ${id} deleted` });
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, username, age, location, email, phoneNumber } =
      req.body;
    const id = req.user.userId;
    console.log(id);
    const checkUpdateInfo = await pool.query(
      "SELECT * FROM users where username=$1 and email=$2",
      [username, email]
    );
    if (checkUpdateInfo.rows.length > 0) {
      return res.status(400).json({ error: "Username already exists." });
    }
    const updatedUser = await pool.query(
      "UPDATE users SET first_name=$1, last_name=$2, username=$3, age=$4, location=$5, email=$6, phone_number=$7 where id=$8",
      [firstName, lastName, username, age, location, email, phoneNumber, id]
    );
    res.status(StatusCodes.OK).json({ updatedUser });
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const checkTestUser = async (req, res) => {
  try {
    const testUser = await pool.query("SELECT * FROM users where username=$1", [
      "anonymous user",
    ]);
    res.status(200).json(testUser.rows);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

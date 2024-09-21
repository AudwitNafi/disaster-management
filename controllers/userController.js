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

export const updateUser = async (req, res) => {};

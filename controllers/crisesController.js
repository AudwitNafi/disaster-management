import pool from "../db.js";

export const getAllCrises = async (req, res) => {
  console.log(req.user);
  const crises = await pool.query("SELECT * FROM crises");
  res.json(crises.rows);
};

export const getCrisis = async (req, res) => {
  try {
    const { id } = req.params;
    const crisis = await pool.query("SELECT * FROM crises where id=$1", [id]);
    if (!crisis) {
      return res.status(400).json({ error: "No crisis with given ID exists." });
    }
    res.json({ crisis });
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const createCrisis = async (req, res) => {
  try {
    const { title, description, location, severity } = req.body;
    req.body.reportedBy = req.user.userId;
    const newCrisis = await pool.query(
      "INSERT INTO crises(title, description,location, severity, status, reported_by, image_url, required_help) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        title,
        description,
        location,
        severity,
        "pending",
        req.user.userId,
        "imageUrl",
        "requiredHelp",
      ]
    );
    res.status(201).json({ user: newCrisis.rows[0] });
    // res.send(req.user);
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const updateCrisis = async (req, res) => {
  try {
    const { id } = req.params;
    // const crisisToUpdate = await pool.query(
    //   "SELECT * FROM crises where id=$1",
    //   [id]
    // );
    const { status } = req.body;
    // console.log(status);
    const updatedCrisis = await pool.query(
      "UPDATE crises SET status=$1 WHERE id=$2",
      [status, id]
    );
    res.json({ message: `crises ${id} updated to ${status}` });
    // console.log(req.user);
    // res.json({ message: "crises updated" });
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteCrisis = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCrisis = await pool.query("DELETE FROM crises WHERE id=$1;", [
      id,
    ]);
    if (!deletedCrisis) {
      return res.status(400).json({ error: "No crisis with given ID exists." });
    }
    res.json({ message: `crisis ${id} deleted` });
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

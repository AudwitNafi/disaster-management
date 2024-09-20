import pool from "../db.js";

export const getAllCrises = async (req, res) => {
  // res.status(200).json({ crises });
  console.log(req.user);
  res.json({ message: "crises data received" });
};

export const getCrisis = async (req, res) => {
  res.status(200).json({ crisis });
};

export const createCrisis = async (req, res) => {
  try {
    const { title, description, location, severity, imageUrl, requiredHelp } =
      req.body;

    const newCrisis = await pool.query(
      "INSERT INTO crises(title, description,location, severity, status, reported_by, image_url, required_help) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        title,
        description,
        location,
        severity,
        "pending",
        reportedBy,
        imageUrl,
        requiredHelp,
      ]
    );
    res.status(201).json({ user: newCrisis.rows[0] });
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const updateCrisis = async (req, res) => {
  try {
    console.log(req.user);
    res.json({ message: "crises updated" });
  } catch (error) {}
};

export const deleteCrisis = async (req, res) => {
  try {
    console.log(req.user);
    res.json({ message: "crises deleted" });
  } catch (error) {}
};

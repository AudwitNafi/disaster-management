import pool from "../db.js";

export const getAllCrises = async (req, res) => {
  const crises = await pool.query("SELECT * FROM crises");
  res.json(crises.rows);
};

export const getRecentCrises = async (req, res) => {
  try {
    const recentCrises = await pool.query(
      "SELECT * FROM crises ORDER BY report_date DESC LIMIT 10"
    );
    res.status(200).json(recentCrises.rows);
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const getApprovedCrises = async (req, res) => {
  try {
    const approvedCrises = await pool.query(
      "SELECT * FROM crises WHERE status='approved'"
    );
    res.status(200).json(approvedCrises.rows);
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const getCrisis = async (req, res) => {
  try {
    const { id } = req.params;
    const crisis = await pool.query("SELECT * FROM crises where id=$1", [id]);
    if (!crisis) {
      return res.status(400).json({ error: "No crisis with given ID exists." });
    }
    res.json(crisis.rows[0]);
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const createCrisis = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      severity,
      requiredHelp,
      requiredFunds,
    } = req.body;
    const newCrisis = { ...req.body };
    console.log("The Image file", req.file.path);
    if (req.file) {
      newCrisis.avatar = req.file.path;
    }
    // console.log(req.user);
    newCrisis.reportedBy = req.user.userId;
    const addedCrisis = await pool.query(
      "INSERT INTO crises(title, description, location, severity, status, assigned, reported_by, image_url, required_help, required_funds) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        newCrisis.title,
        newCrisis.description,
        newCrisis.location,
        newCrisis.severity,
        "pending",
        "not assigned",
        newCrisis.reportedBy,
        newCrisis.avatar,
        requiredHelp,
        requiredFunds,
      ]
    );
    res.status(201).json({ user: addedCrisis.rows[0] });
    // res.send(req.file);
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
    const { status, severity } = req.body;

    if (status === "approved") {
      const funds = await pool.query(
        "SELECT required_funds FROM crises where id=$1",
        [id]
      );
      res.json(funds.rows[0]);
      const { required_funds } = funds.rows[0];
      console.log(required_funds);
      await pool.query(
        "INSERT INTO expenses (amount, description) Values($1, $2)",
        [required_funds, id]
      );
    }
    // console.log(status);
    const updatedCrisis = await pool.query(
      "UPDATE crises SET status=$1, severity=$2 WHERE id=$3",
      [status, severity, id]
    );
    res.json({ message: `crises ${id} updated to ${status}` });
    console.log(req.user);
    res.json({ message: "crises updated" });
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

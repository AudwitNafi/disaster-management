import pool from "../db.js";
export const getAllDonations = async (req, res) => {
  // res.status(200).json({ donations });
  const donations = await pool.query("SELECT * FROM donations");
  res.json(donations.rows);
  res.json({ message: "donations data received" });
};

export const getDonation = async (req, res) => {
  res.status(200).json({ donation });
};

export const createDonation = async (req, res) => {
  try {
    const { amount, donorName } = req.body;
    const newDonation = await pool.query(
      "INSERT INTO donations(amount,donor_name) VALUES($1, $2) RETURNING *",
      [amount, donorName]
    );
    res.status(201).json({ user: newDonation.rows[0] });
    // res.send(req.user);
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const updateDonations = async (req, res) => {};

export const deleteDonation = async (req, res) => {};

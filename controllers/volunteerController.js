import pool from "../db.js";

export const getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await pool.query(
      "SELECT id, first_name, last_name, username, email, age, tasks, assigned_crisis_title, task_location, status FROM volunteer_profiles, users where users.id=volunteer_profiles.user_id"
    );
    res.status(200).json(volunteers.rows);
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const getAvailableVolunteers = async (req, res) => {
  try {
    const availableVolunteers = await pool.query(
      "SELECT id, first_name, last_name, username, email, phone_number, age, tasks, assigned_crisis_title, task_location, status FROM volunteer_profiles, users where users.id=volunteer_profiles.user_id and status='available'"
    );
    res.status(200).json(availableVolunteers.rows);
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const getVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    const volunteer = await pool.query(
      "SELECT * FROM volunteer_profiles where user_id=$1",
      [id]
    );
    if (!volunteer) {
      return res
        .status(400)
        .json({ error: "No volunteer with given ID exists." });
    }
    res.json({ volunteer });
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const approveVolunteers = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedVolunteer = await pool.query(
      "UPDATE volunteer_profiles SET status=$1 where user_id=$2",
      [status, id]
    );
    console.log(id);
    res.status(200).json(updatedVolunteer);
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const assignVolunteers = async (req, res) => {
  try {
    const { id } = req.params;
    const { assignedCrisis, tasks, taskLocation } = req.body;
    console.log(assignedCrisis);
    const title = assignedCrisis.split(", ");
    console.log(req.body);
    // const updatedVolunteer = await pool.query(
    //   "UPDATE volunteer_profiles SET assigned_crisis=(select id from crises where title=$1 limit 1), tasks=$2, task_location=$3  where user_id=$4",
    //   [title, tasks, taskLocation, id]
    // );
    const updatedVolunteer = await pool.query(
      "UPDATE volunteer_profiles SET assigned_crisis=(select id from crises where title=$1 limit 1), assigned_crisis_title=$2, tasks=$3, task_location=$4, status='assigned' where user_id=$5",
      [title, title, tasks, taskLocation, id]
    );
    // console.log(id);
    res.status(200).json(updatedVolunteer.rows);
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

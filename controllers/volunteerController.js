export const getAllVolunteers = async (req, res) => {
  res.status(200).json({ volunteers });
};

export const getVolunteer = async (req, res) => {
  res.status(200).json({ volunteer });
};

export const createVolunteer = async (req, res) => {};

export const updateVolunteers = async (req, res) => {};

export const deleteVolunteer = async (req, res) => {};

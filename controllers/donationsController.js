export const getAllDonations = async (req, res) => {
  // res.status(200).json({ donations });
  res.json({ message: "donations data received" });
};

export const getDonation = async (req, res) => {
  res.status(200).json({ donation });
};

export const createDonation = async (req, res) => {};

export const updateDonations = async (req, res) => {};

export const deleteDonation = async (req, res) => {};

export const getAllItems = async (req, res) => {
  res.status(200).json({ items });
};

export const getItem = async (req, res) => {
  res.status(200).json({ item });
};

export const createItem = async (req, res) => {};

export const updateItems = async (req, res) => {};

export const deleteItem = async (req, res) => {};

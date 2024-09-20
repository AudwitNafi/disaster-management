//to group all routes related to crises

import { Router } from "express";
const router = Router();

import {
  getAllItems,
  createItem,
  getItem,
  updateItems,
  deleteItem,
} from "../controllers/inventoryController.js";

router.route("/").get(getAllItems).post(createItem);
router.route("/:id").get(getItem).patch(updateItems).delete(deleteItem);

export default router;

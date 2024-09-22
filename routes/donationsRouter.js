//to group all routes related to crises

import { Router } from "express";
const router = Router();

import {
  getAllDonations,
  createDonation,
  updateDonations,
  deleteDonation,
  getDonationSum,
  getExpenseSum,
} from "../controllers/donationsController.js";

router.route("/").get(getAllDonations).post(createDonation);
router.route("/expenses").get(getExpenseSum);
router.route("/all-donations").get(getDonationSum);
router.route("/:id").patch(updateDonations).delete(deleteDonation);

export default router;

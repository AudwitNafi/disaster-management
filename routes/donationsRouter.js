//to group all routes related to crises

import { Router } from "express";
const router = Router();

import {
  getAllDonations,
  createDonation,
  getDonation,
  updateDonations,
  deleteDonation,
} from "../controllers/donationsController.js";

router.route("/").get(getAllDonations).post(createDonation);
router
  .route("/:id")
  .get(getDonation)
  .patch(updateDonations)
  .delete(deleteDonation);

export default router;

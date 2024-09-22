//to group all routes related to crises

import { Router } from "express";
const router = Router();

import {
  getAllVolunteers,
  getAvailableVolunteers,
  getVolunteer,
  approveVolunteers,
  assignVolunteers,
} from "../controllers/volunteerController.js";

router.route("/").get(getAllVolunteers);
router.route("/available").get(getAvailableVolunteers);
router.route("/:id").get(getVolunteer).patch(approveVolunteers);
router.route("/assign/:id").patch(assignVolunteers);

export default router;

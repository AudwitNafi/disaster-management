//to group all routes related to crises

import { Router } from "express";
const router = Router();

import {
  getAllVolunteers,
  createVolunteer,
  getVolunteer,
  updateVolunteers,
  deleteVolunteer,
} from "../controllers/volunteerController.js";

router.route("/").get(getAllVolunteers).post(createVolunteer);
router
  .route("/:id")
  .get(getVolunteer)
  .patch(updateVolunteers)
  .delete(deleteVolunteer);

export default router;

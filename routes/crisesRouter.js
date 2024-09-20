//to group all routes related to crises
import { authenticateUser } from "../middleware/authMiddleware.js";
import { validateCrisisInput } from "../middleware/validationMiddleware.js";
import { Router } from "express";
const router = Router();

import {
  getAllCrises,
  createCrisis,
  getCrisis,
  updateCrisis,
  deleteCrisis,
} from "../controllers/crisesController.js";

router.route("/").get(getAllCrises).post(validateCrisisInput, createCrisis);
router
  .route("/:id")
  .get(getCrisis)
  .patch(authenticateUser, updateCrisis)
  .delete(authenticateUser, deleteCrisis);

export default router;

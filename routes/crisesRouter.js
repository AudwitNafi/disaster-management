//to group all routes related to crises
import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authMiddleware.js";
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

router
  .route("/")
  .get(getAllCrises)
  .post(authenticateUser, validateCrisisInput, createCrisis);
router.get("/:id", getCrisis);
router.patch(
  "/:id",
  authenticateUser,
  authorizePermissions("admin"),
  updateCrisis
);
router.delete(
  "/:id",
  authenticateUser,
  authorizePermissions("admin"),
  deleteCrisis
);

export default router;

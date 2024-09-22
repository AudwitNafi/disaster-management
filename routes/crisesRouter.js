//to group all routes related to crises
import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
import { validateCrisisInput } from "../middleware/validationMiddleware.js";
import { Router } from "express";
const router = Router();

import {
  getAllCrises,
  createCrisis,
  getCrisis,
  updateCrisis,
  deleteCrisis,
  getRecentCrises,
} from "../controllers/crisesController.js";

router.route("/").get(getAllCrises);
router
  .route("/")
  .post(
    authenticateUser,
    upload.single("avatar"),
    validateCrisisInput,
    createCrisis
  );

router.get("/recent", getRecentCrises);

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

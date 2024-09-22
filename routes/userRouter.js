import { Router } from "express";
import {
  getStats,
  getCurrentUser,
  updateUser,
  checkTestUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import {
  authorizePermissions,
  checkForTestUser,
} from "../middleware/authMiddleware.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/stats", authorizePermissions("admin"), getStats);
router.get("/check-test-user", checkTestUser);
router.patch("/update-user", validateUpdateUserInput, updateUser);

export default router;

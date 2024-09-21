import { Router } from "express";
import {
  getStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import {
  authorizePermissions,
  checkForTestUser,
} from "../middleware/authMiddleware.js";
// import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/stats", authorizePermissions("admin"), getStats);
router.patch(
  "/update-user",
  checkForTestUser,
  // upload.single("avatar"),
  validateUpdateUserInput,
  updateUser
);

export default router;

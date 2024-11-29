import express from "express";
import { LoginController, LogoutController, RegisterController, GoogleAuthController } from "../controllers/AuthConroller.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", RegisterController);
router.post("/login", LoginController);
router.post("/logout", verifyToken, LogoutController);
router.post("/google", GoogleAuthController); // Add this line

export default router;

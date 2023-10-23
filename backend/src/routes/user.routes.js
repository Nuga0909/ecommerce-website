import express from "express";
const router = express.Router();
import { registerUser, loginUser, getMe } from "../controller/users.controller.js";
import { protect } from "../middleware/auth/auth.middleware.js";

router.post('/', registerUser);
router.post("/login", loginUser);
router.post("/me", protect, getMe);

export default router;

import express from "express";
const router = express.Router();
import { registerUser, loginUser, getMe } from "../controller/users.controller.js";

router.post('/', registerUser);
router.post("/login", loginUser);
router.post("/me", getMe);

export default router;

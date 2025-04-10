import express from "express";
import { adminLogin } from "../controller/adminController.js";

const router = express.Router();

// POST /api/admin/login
router.post("/login", adminLogin);

export default router;

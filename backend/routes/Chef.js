import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { getChefs, createApplication, getAllChefApplications, updateApplicationStatus } from "../controller/ChefController.js";

const router = express.Router();

// Ensure the upload directory exists
const uploadDir = path.join("uploads", "Chef");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer for file uploads (for resume files)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Public GET endpoint (for approved chefs only)
router.get("/chefs", getChefs);

// Admin endpoints:
// GET all chef applications (pending & approved)
router.get("/all", getAllChefApplications);

// POST a new chef application with resume upload
router.post("/apply", upload.single("resume"), createApplication);

// PUT endpoint to approve a chef application
router.put("/:id/status", updateApplicationStatus);

export default router;

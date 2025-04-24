import express from "express";
import { createBooking } from "../controller/bookingController.js";
const router = express.Router();

router.post('/bookchef', createBooking);

export default router;
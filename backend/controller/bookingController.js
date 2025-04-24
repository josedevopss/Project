import Booking from '../models/BookChef.js';

export const createBooking = async (req, res) => {
  console.log("Booking request received:", req.body);
  try {
    // Attach user ID from token via middleware (assumed to be in req.user)
    const booking = new Booking({
      ...req.body
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    console.log("Booking creation failed:", err);
    res.status(400).json({ message: err.message });
  }
};

import Booking from '../models/orderingModel.js';

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: 'Your desert has been booked',
      data: savedBooking,
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Booking failed',
      error: error.message,
    });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const userId = req.params.id;
    const bookings = await Booking.find({ userId });
    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error('Error retrieving user bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving bookings',
      error: error.message,
    });
  }
};

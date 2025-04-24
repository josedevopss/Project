import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  chef: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Chef', 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  number: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  specialRequests: { 
    type: String 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model('Booking', bookingSchema);

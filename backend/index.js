import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import recipeRoutes from './routes/recipeRoutes.js'
import recipeDataRoutes from './routes/recipeDataRoutes.js'
import applyRoutes from './routes/Chef.js'; // Import apply routes
import path from 'path';
import bookingRoutes from './routes/bookings.js'; // Import booking routes
import adminRoutes from "./routes/adminRoutes.js";

import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Allow requests from localhost:3000 only
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected ", process.env.MONGO_URI);
  } catch (error) {
    console.error("DB connection failed:", error.message);
  }
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, filePath) => {
      // For PDFs and common image types, set header to inline so that they are displayed in the browser.
      if (
        filePath.endsWith(".pdf") ||
        filePath.endsWith(".jpg") ||
        filePath.endsWith(".jpeg") ||
        filePath.endsWith(".png")
      ) {
        res.setHeader("Content-Disposition", "inline");
      }
    },
  })
);

// Route mounting
app.use("/api/v1/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/recipesData", recipeDataRoutes);
app.use('/api/v1/users', usersRoutes);
app.use("/api/chef", applyRoutes);
app.use('/api/bookings', bookingRoutes);
app.use("/api/admin", adminRoutes);


// Handle preflight requests for all routes
app.options('*', cors(corsOptions));

app.listen(port, () => {
  connect();
  console.log(`Server is running on port is set to ${port}`);
});

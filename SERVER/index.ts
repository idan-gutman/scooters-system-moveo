import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import scooterRoutes from "./routes/scooterRoutes";
import authRoutes from "./routes/authRoutes";
import cors from "cors";
import userRoutes from "./routes/userRouts";
import parkingRoutes from "./routes/parkingRoutes";
import failureRoutes from "./routes/failureRoutes";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 6001;
const MONGO_URL = process.env.MONGO_URL || "";
app.use(express.json());

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

// Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(error));

// Routes
app.options("*", cors(corsOptions));

//auth
app.use("/api/auth", authRoutes);

//scooters
app.use("/api", scooterRoutes);

//users
app.use("/api", userRoutes);

//parking
app.use("/api", parkingRoutes);

// failureד
app.use("/api", failureRoutes);

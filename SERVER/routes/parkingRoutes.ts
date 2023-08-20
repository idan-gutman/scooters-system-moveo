import express from "express";
import {
  getAvailableParkingSpots,
  addParkingSpot,
  deleteParkingSpot,
} from "../controllers/ParkingController";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

// Route to get all available parking spots
router.get("/parkings", verifyToken, getAvailableParkingSpots);

//Create a new parking spot
router.post("/parkings", verifyToken, addParkingSpot);

//Delete parking spot
router.delete("/parkings/:parkingId", verifyToken, deleteParkingSpot);

export default router;

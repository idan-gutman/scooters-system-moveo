import express from "express";
import { getAllScooters } from '../controllers/ScooterController';
import { verifyToken } from "../middleware/authMiddleware";
const router = express.Router();

router.get("/scooters",verifyToken, getAllScooters);

export default router;

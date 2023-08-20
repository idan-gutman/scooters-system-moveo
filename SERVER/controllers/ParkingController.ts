import { Request, Response } from "express";
import Parking from "../models/ParkingModel";

// Get all available parking spots
export const getAvailableParkingSpots = async (req: Request, res: Response) => {
  try {
    const parkingSpots = await Parking.find();
    res.status(201).json(parkingSpots);
  } catch (error) {
    res.status(500).json({ message: "Error fetching parking spots" });
  }
};

export const addParkingSpot = async (req: Request, res: Response) => {
  try {
    const newParking = new Parking(req.body);
    const savedParking = await newParking.save();
    res.status(201).json(savedParking);
  } catch (error) {
    console.error("Error adding parking spot:", error);
    res.status(500).json({ message: "Error adding parking spot" });
  }
};
export const deleteParkingSpot = async (req: Request, res: Response) => {
  const { parkingId } = req.params;

  try {
    const deletedParking = await Parking.findByIdAndRemove(parkingId);

    if (!deletedParking) {
      return res.status(404).json({ message: "Parking spot not found" });
    }

    res.status(200).json({ message: "Parking spot deleted successfully" });
  } catch (error) {
    console.error("Error deleting parking spot:", error);
    res.status(500).json({ message: "Error deleting parking spot" });
  }
};

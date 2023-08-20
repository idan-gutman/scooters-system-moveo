import { Request, Response } from "express";
import Scooter from "../models/ScooterModel";

export const getAllScooters = async (req: Request, res: Response) => {
  try {
    const mockScooters = [
      {
        uniqueId: '1',
        currentLocation: { lat: 40.7128, long: -74.0060 },
        model: 'Scooter Model A',
        yearOfManufacture: 2020,
        status: 'active',
      },
      {
        uniqueId: '2',
        currentLocation: { lat: 34.0522, long: -118.2437 },
        model: 'Scooter Model B',
        yearOfManufacture: 2019,
        status: 'broken',
      },
      {
        uniqueId: '3',
        currentLocation: { lat: 51.5074, long: -0.1278 },
        model: 'Scooter Model C',
        yearOfManufacture: 2022,
        status: 'handled',
      },
    ];
    

    const scooters = await Scooter.find();
    res.json(scooters);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

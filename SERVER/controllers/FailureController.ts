import { Request, Response } from "express";
import Failure from "../models/failureModel";

// Get failures for a scooter by scooterId
export const getFailuresForScooter = async (req: Request, res: Response) => {
  const { scooterId } = req.params;

  try {
    const failures = await Failure.find({ scooterId }).exec();
    // const failures = await Failure.find();
    res.status(200).json(failures);
  } catch (error) {
    res.status(500).json({ message: "Error fetching failures for scooter" });
  }
};

// Get failure history for a scooter by scooterId
export const getFailureHistoryForScooter = async (
  req: Request,
  res: Response
) => {
  const { scooterId } = req.params;
  try {
    const history = await Failure.find({ scooterId, status: "closed" });
    res.status(200).json(history);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching failure history for scooter" });
  }
};

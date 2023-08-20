import { Request, Response } from "express";
import User from "../models/UserModel";
import CryptoJS from "crypto-js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password, firstName, lastName, email } = req.body;

    // Hash the password
    const hashedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.PASS_SECRET || ""
    ).toString();

    const newUser = new User({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      email,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user?.password as string,
      process.env.PASS_SECRET || ""
    ).toString(CryptoJS.enc.Utf8);

    if (hashedPassword !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user?._id }, process.env.JWT_SECRET || "", {
      expiresIn: "3h",
    });

    const userWithoutPassword = {
      _id: user?._id,
      username: user?.username,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    };

    res.status(200).json({ userWithoutPassword, token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

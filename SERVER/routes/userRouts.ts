import express from "express";
import { verifyToken } from "../middleware/authMiddleware";
import { getAllUsers } from "../controllers/UserController";
const router = express.Router();

router.get("/users",verifyToken, getAllUsers);

export default router;

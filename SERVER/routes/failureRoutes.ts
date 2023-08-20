// failureRoutes.ts
import express from 'express';
import { getFailuresForScooter, getFailureHistoryForScooter } from '../controllers/failureController';
import { verifyToken } from '../middleware/authMiddleware';

const router = express.Router();

// Route to get failures for a scooter by scooterId
router.get('/failures/:scooterId',verifyToken, getFailuresForScooter);

// Route to get failure history for a scooter by scooterId
router.get('/failures/history/:scooterId',verifyToken, getFailureHistoryForScooter);

export default router;

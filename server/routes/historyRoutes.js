import express from 'express';
import { getHistory, addToHistory } from '../controllers/historyController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, getHistory);
router.post('/', authenticateToken, addToHistory);

export default router;

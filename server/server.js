import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDatabase } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import historyRoutes from './routes/historyRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'CineFinder backend server is running.' });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/history', historyRoutes);

// Start server first
app.listen(PORT, () => {
  console.log(`CineFinder backend server running on http://localhost:${PORT}`);
  // Attempt DB initialization
  initDatabase().catch(err => {
    console.warn(`[WARNING] MySQL connection pending credentials: ${err.message}`);
  });
});

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import cors from 'cors';
import projectRoutes from './routes/projectRoutes.js';

// Initialize environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize the Express app
const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Middleware for parsing JSON
app.use(express.json());

// Auth routes for register and login
app.use('/api/auth', authRoutes);

// Register project routes
app.use('/api/projects', projectRoutes);

// Custom error handling
app.use(notFound);
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

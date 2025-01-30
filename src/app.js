const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use('/tasks', taskRoutes); // API routes

// Error handling middleware
app.use(errorHandler);

module.exports = app;

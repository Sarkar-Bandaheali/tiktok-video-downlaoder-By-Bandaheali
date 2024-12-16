// Sarkar-MD
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression'); // Added for compression
const rateLimit = require('express-rate-limit'); // Added for rate limiting

const downloaderRoute = require('./routes/downloader');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(compression()); // Compress responses for faster network transfers
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1d', // Cache static files for 1 day
}));

// Rate-limiting to avoid abuse (e.g., too many requests from a single IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests, please try again later.',
});
app.use('/api', limiter); // Apply rate-limiting for API routes

// Routes
app.use('/api', downloaderRoute); // Add downloader routes under "/api"

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// POWERED BY BANDAHEALI

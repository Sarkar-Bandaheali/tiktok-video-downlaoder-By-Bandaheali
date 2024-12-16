// Sarkar-MD
const express = require('express');
const axios = require('axios');

const router = express.Router();

// Set a default timeout for Axios to prevent waiting too long for external API responses
const axiosInstance = axios.create({
  timeout: 5000, // 5 seconds timeout
});

// TikTok video downloader route
router.post('/download', async (req, res) => {
  const { videoURL } = req.body;

  if (!videoURL) {
    return res.status(400).json({ error: 'Please provide a valid TikTok video URL.' });
  }

  try {
    // Using axiosInstance to set a timeout and handle the request
    const apiResponse = await axiosInstance.get(`https://www.dark-yasiya-api.site/download/tiktok?url=${encodeURIComponent(videoURL)}`);
    const { status, result } = apiResponse.data;

    // Check the response status and handle errors accordingly
    if (!status) {
      return res.status(500).json({ error: 'Unable to fetch video details.' });
    }

    // Send the response with the video data
    res.status(200).json({
      title: result.title,
      author: result.author,
      cover: result.cover,
      hdVideo: result.hdVideo,
      wmVideo: result.wmVideo,
      sound: result.sound,
    });
  } catch (error) {
    // Improved error handling: log error and send appropriate message
    console.error('Error fetching TikTok video details:', error.message);
    res.status(500).json({ error: 'Failed to process the request. Please try again later.' });
  }
});

module.exports = router;
// POWERED BY BANDAHEALI

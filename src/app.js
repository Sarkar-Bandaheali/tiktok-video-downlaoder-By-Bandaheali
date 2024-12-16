// Sarkar-MD
import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Route for TikTok video download
app.post('/api/download', async (req, res) => {
  const { videoURL } = req.body;

  if (!videoURL) {
    return res.status(400).json({ error: 'Please provide a valid TikTok video URL.' });
  }

  try {
    const apiResponse = await axios.get(`https://www.dark-yasiya-api.site/download/tiktok?url=${encodeURIComponent(videoURL)}`);
    const { status, result } = apiResponse.data;

    if (!status) {
      return res.status(500).json({ error: 'Unable to fetch video details.' });
    }

    res.status(200).json({
      title: result.title,
      author: result.author,
      cover: result.cover,
      hdVideo: result.hdVideo,
      wmVideo: result.wmVideo,
      sound: result.sound,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process the request. Please try again later.' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// POWERED BY BANDAHEALI

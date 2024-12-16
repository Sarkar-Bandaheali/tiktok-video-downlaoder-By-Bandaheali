// Sarkar-MD
import express from 'express';
import axios from 'axios';

export const DownloaderRouter = express.Router();

DownloaderRouter.post('/', async (req, res) => {
  const { videoURL } = req.body;
  if (!videoURL) return res.status(400).json({ error: 'No URL provided' });

  try {
    const apiResponse = await axios.get(`https://www.dark-yasiya-api.site/download/tiktok?url=${encodeURIComponent(videoURL)}`);
    const { status, result } = apiResponse.data;

    if (!status) {
      return res.status(500).json({ error: 'Failed to fetch video details from API' });
    }

    res.status(200).json({
      title: result.title,
      author: result.author,
      cover: result.cover,
      hdVideo: result.hdVideo,
      wmVideo: result.wmVideo,
      sound: result.sound,
      duration: result.duration,
      views: result.views,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to download video' });
  }
});
// POWERED BY BANDAHEALI

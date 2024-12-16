// Sarkar-MD
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { DownloaderRouter } from './routes/downloader.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/download', DownloaderRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// POWERED BY BANDAHEALI

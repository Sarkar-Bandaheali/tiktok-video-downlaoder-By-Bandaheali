// Sarkar-MD
async function downloadVideo() {
  const videoURL = document.getElementById('videoURL').value;
  if (!videoURL) {
    alert('Please enter a video URL');
    return;
  }

  try {
    const response = await fetch('/api/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoURL }),
    });

    const data = await response.json();
    if (data.error) {
      document.getElementById('result').innerText = data.error;
    } else {
      const a = document.createElement('a');
      a.href = data.downloadURL; // Adjust based on your API response
      a.download = 'tiktok-video.mp4';
      a.click();
    }
  } catch (err) {
    console.error(err);
    document.getElementById('result').innerText = 'Download failed!';
  }
}
// POWERED BY BANDAHEALI

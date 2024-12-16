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
      document.getElementById('result').innerHTML = `<p>${data.error}</p>`;
    } else {
      document.getElementById('result').innerHTML = `
        <h3>${data.title}</h3>
        <p>Author: ${data.author}</p>
        <img src="${data.cover}" alt="Video Cover" width="300"/>
        <p>Duration: ${data.duration} seconds</p>
        <p>Views: ${data.views}</p>
        <a href="${data.hdVideo}" target="_blank" download>Download HD Video</a><br>
        <a href="${data.wmVideo}" target="_blank" download>Download Watermarked Video</a><br>
        <a href="${data.sound}" target="_blank" download>Download Audio</a>
      `;
    }
  } catch (err) {
    console.error(err);
    document.getElementById('result').innerHTML = '<p>Download failed!</p>';
  }
}
// POWERED BY BANDAHEALI

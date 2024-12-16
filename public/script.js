async function downloadVideo() {
  const videoURL = document.getElementById('videoURL').value;
  const resultContainer = document.getElementById('result');
  const loadingMessage = document.getElementById('loading');

  // Clear previous results
  resultContainer.innerHTML = '';
  loadingMessage.style.display = 'none';

  if (!videoURL) {
    alert('Please enter a TikTok video URL.');
    return;
  }

  try {
    loadingMessage.style.display = 'block'; // Show loading message

    const response = await fetch('/api/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoURL }),
    });

    const data = await response.json();

    if (data.error) {
      resultContainer.innerHTML = `<p>${data.error}</p>`;
    } else {
      resultContainer.innerHTML = `
        <h3>${data.title}</h3>
        <p>Author: ${data.author}</p>
        <img src="${data.cover}" alt="Video Cover" width="300"/>
        <p><strong>Download Options:</strong></p>
        <button onclick="downloadFile('${data.hdVideo}', 'hd_video.mp4')">Download HD Video</button>
        <button onclick="downloadFile('${data.wmVideo}', 'watermarked_video.mp4')">Download Watermarked Video</button>
        <button onclick="downloadFile('${data.sound}', 'audio.mp3')">Download Audio</button>
      `;
    }
  } catch (err) {
    console.error(err);
    resultContainer.innerHTML = '<p>Download failed! Please try again later.</p>';
  } finally {
    loadingMessage.style.display = 'none'; // Hide loading message
  }
}

async function downloadFile(fileURL, fileName) {
  try {
    // Show loading message when starting the download
    const loadingMessage = document.getElementById('loading');
    loadingMessage.style.display = 'block';

    // Fetch the file
    const response = await fetch(fileURL);
    if (!response.ok) {
      throw new Error('Failed to fetch the file.');
    }

    const blob = await response.blob();

    // Create a temporary link element for downloading
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob); // Convert the blob into a download link
    downloadLink.download = fileName; // Set the filename for the download

    // Append the link, trigger the download, and clean up
    downloadLink.style.display = 'none'; // Hide the link
    document.body.appendChild(downloadLink);
    downloadLink.click(); // Trigger the download

    // Cleanup the link element and revoke the object URL to free memory
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadLink.href);
  } catch (err) {
    console.error('Download failed:', err);
    alert('Failed to download the file. Please try again.');
  } finally {
    // Hide loading message when download is complete
    document.getElementById('loading').style.display = 'none';
  }
  }async function downloadVideo() {
  const videoURL = document.getElementById('videoURL').value;
  const resultContainer = document.getElementById('result');
  const loadingMessage = document.getElementById('loading');

  // Clear previous results
  resultContainer.innerHTML = '';
  loadingMessage.style.display = 'none';

  if (!videoURL) {
    alert('Please enter a TikTok video URL.');
    return;
  }

  try {
    loadingMessage.style.display = 'block'; // Show loading message

    const response = await fetch('/api/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoURL }),
    });

    const data = await response.json();

    if (data.error) {
      resultContainer.innerHTML = `<p>${data.error}</p>`;
    } else {
      resultContainer.innerHTML = `
        <h3>${data.title}</h3>
        <p>Author: ${data.author}</p>
        <img src="${data.cover}" alt="Video Cover" width="300"/>
        <p><strong>Download Options:</strong></p>
        <button onclick="downloadFile('${data.hdVideo}', 'hd_video.mp4')">Download HD Video</button>
        <button onclick="downloadFile('${data.wmVideo}', 'watermarked_video.mp4')">Download Watermarked Video</button>
        <button onclick="downloadFile('${data.sound}', 'audio.mp3')">Download Audio</button>
      `;
    }
  } catch (err) {
    console.error(err);
    resultContainer.innerHTML = '<p>Download failed! Please try again later.</p>';
  } finally {
    loadingMessage.style.display = 'none'; // Hide loading message
  }
}

async function downloadFile(fileURL, fileName) {
  try {
    // Show loading message when starting the download
    const loadingMessage = document.getElementById('loading');
    loadingMessage.style.display = 'block';

    // Fetch the file
    const response = await fetch(fileURL);
    if (!response.ok) {
      throw new Error('Failed to fetch the file.');
    }

    const blob = await response.blob();

    // Create a temporary link element for downloading
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob); // Convert the blob into a download link
    downloadLink.download = fileName; // Set the filename for the download

    // Append the link, trigger the download, and clean up
    downloadLink.style.display = 'none'; // Hide the link
    document.body.appendChild(downloadLink);
    downloadLink.click(); // Trigger the download

    // Cleanup the link element and revoke the object URL to free memory
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadLink.href);
  } catch (err) {
    console.error('Download failed:', err);
    alert('Failed to download the file. Please try again.');
  } finally {
    // Hide loading message when download is complete
    document.getElementById('loading').style.display = 'none';
  }
}

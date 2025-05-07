fetch('https://raw.githubusercontent.com/kcpc-relatedwork/kcpc-latest-video/main/latest-video.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('latest-video-container');
    if (container && data.videoUrl) {
      // Clear out any existing content
      container.innerHTML = '';

      // Insert the iframe only
      container.innerHTML = `
        <div class="video-wrapper">
          ${data.videoUrl}
        </div>
      `;
    }
  })
  .catch(error => {
    console.error('Error loading latest video:', error);
  });

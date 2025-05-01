document.addEventListener('DOMContentLoaded', function () {
  fetch('https://raw.githubusercontent.com/kcpc-relatedwork/kcpc-latest-video/main/latest-video.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('latest-video-container');
      if (container && data.videoUrl) {
        container.innerHTML = `
          <h2>${data.title}</h2>
          <p>Published at: ${new Date(data.publishedAt).toLocaleString()}</p>
          <div class="video-wrapper">
            ${data.videoUrl}
          </div>
        `;
      }
    })
    .catch(error => {
      console.error('Error loading latest video:', error);
    });
});

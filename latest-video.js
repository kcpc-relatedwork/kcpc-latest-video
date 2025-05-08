<script>
  window.addEventListener('DOMContentLoaded', () => {
    fetch('https://raw.githubusercontent.com/kcpc-relatedwork/kcpc-latest-video/main/latest-video.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('latest-video-container');
        if (container && data.videoUrl) {
          container.innerHTML = `
            <div class="video-wrapper">
              ${data.videoUrl}
            </div>
          `;
        } else {
          console.warn('Container not found or videoUrl missing', { container, data });
        }
      })
      .catch(error => {
        console.error('Error loading latest video:', error);
      });
  });
</script>

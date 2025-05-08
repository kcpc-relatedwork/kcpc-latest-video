<script>
  fetch('https://raw.githubusercontent.com/kcpc-relatedwork/kcpc-latest-video/main/latest-video.json')
    .then(response => response.json())
    .then(data => {
      console.log("Fetched JSON:", data);
      const container = document.getElementById('latest-video-container');
      if (container) {
        container.innerHTML = '';

        if (data.videoUrl) {
          container.innerHTML = `
            <div class="video-wrapper">
              ${data.videoUrl}
            </div>
          `;
        } else {
          container.innerHTML = '<p>No videoUrl found in JSON.</p>';
        }
      } else {
        console.error('Container not found.');
      }
    })
    .catch(error => {
      console.error('Error loading latest video:', error);
    });
</script>

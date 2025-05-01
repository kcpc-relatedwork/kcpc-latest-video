fetch('https://raw.githubusercontent.com/kcpc-relatedwork/kcpc-latest-video/main/latest-video.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('latest-video-container');
    if (container && data.videoUrl) {
      let html = '<div class="video-wrapper">' + data.videoUrl + '</div>';

      if (data.title) {
        html = `<h2>${data.title}</h2>` + html;
      }
      if (data.publishedAt) {
        const formattedDate = new Date(data.publishedAt).toLocaleString();
        html = `<p>Published at: ${formattedDate}</p>` + html;
      }

      container.innerHTML = html;
    }
  })
  .catch(error => {
    console.error('Error loading latest video:', error);
  });

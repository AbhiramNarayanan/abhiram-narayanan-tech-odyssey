document.addEventListener('DOMContentLoaded', () => {
    const projectVideos = document.querySelectorAll('.project-video video');
    const backgroundMusic = new Audio('product-information-146973.mp3'); // Replace 'path/to/background-music.mp3' with the actual path to your background music file
  
    // Set the loop property of the background music to true
    backgroundMusic.loop = true;
  
    // Play the background music when the page loads
    backgroundMusic.play();
  
    // Add event listeners to each project video
    projectVideos.forEach((video) => {
      video.addEventListener('play', () => {
        backgroundMusic.pause();
      });
  
      video.addEventListener('pause', () => {
        backgroundMusic.play();
      });
  
      video.addEventListener('ended', () => {
        backgroundMusic.play();
      });
    });
  });
  
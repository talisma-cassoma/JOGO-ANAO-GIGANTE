var audioToPlay = [document.getElementById('audio1'), document.getElementById('audio2')];
var backgroundImageIndex = 0;
var backgroundImages = ['image1.png', 'image2.png']; // Update with your image URLs

document.getElementById('runButton').addEventListener('click', function() {
  toggleGame();
});

var intervalId = null;

function toggleGame() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    document.getElementById('runButton').textContent = 'Run Game';
    audioToPlay.forEach(element => {
      element.pause();
      element.currentTime = 0; // Reset audio to the beginning
    });
  } else {
    intervalId = setInterval(playRandomAudio, 4000); // Adjust the interval as needed
    document.getElementById('runButton').textContent = 'Stop Game';
  }
}

function playRandomAudio() {
  var randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  
  if (randomNumber % 2 === 0) {
    audioToPlay[0].play();
    audioToPlay[1].pause(); // Pause the other audio
    audioToPlay[1].currentTime = 0; // Reset the other audio to the beginning
    document.body.style.backgroundImage = 'url(' + backgroundImages[0] + ')';
  } else {
    audioToPlay[1].play();
    audioToPlay[0].pause(); // Pause the other audio
    audioToPlay[0].currentTime = 0; // Reset the other audio to the beginning
    document.body.style.backgroundImage = 'url(' + backgroundImages[1] + ')';
  }
}

const players = document.querySelectorAll('.music-player');
let currentAudio = null;
let currentButton = null;

players.forEach(player => {
  const audio = player.querySelector('.audio-sample');
  const button = player.querySelector('.play-btn');
  button.addEventListener('click', () => {
    if (audio.paused) {
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        if (currentButton) {
          currentButton.textContent = 'Reproduzir';
          currentButton.classList.remove('paused');
        }
      }
      audio.play();
      button.textContent = 'Pausar';
      button.classList.add('paused');
      currentAudio = audio;
      currentButton = button;
    } else {
      audio.pause();
      button.textContent = 'Reproduzir';
      button.classList.remove('paused');
      currentAudio = null;
      currentButton = null;
    }
  });
  audio.addEventListener('ended', () => {
    button.textContent = 'Reproduzir';
    button.classList.remove('paused');
    if (currentAudio === audio) {
      currentAudio = null;
      currentButton = null;
    }
  });
});


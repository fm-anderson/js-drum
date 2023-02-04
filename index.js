const drumKeys = [
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
];

const addClass = (keyCode) => {
  document.getElementById(keyCode).classList.add('playing');
  document.getElementById('overlay').style.display = 'block';
  playAudio(keyCode);
};

const removeClass = (keyCode) => {
  document.getElementById(keyCode).classList.remove('playing');
  document.getElementById('overlay').style.display = 'none';
};

function playAudio(id) {
  const soundId = id.replace('Key', '');
  document.getElementById(soundId).play();
}

window.addEventListener('keydown', (e) => {
  if (drumKeys.includes(e.code)) {
    addClass(e.code);
  }
  return;
});

window.addEventListener('keyup', (e) => {
  if (drumKeys.includes(e.code)) {
    removeClass(e.code);
  }
  return;
});

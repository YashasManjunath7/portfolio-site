document.querySelectorAll('.menu-button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    const audio = new Audio('assets/sounds/select.wav');
    audio.play();
  });
});

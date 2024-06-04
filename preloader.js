const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999;
`;

const rivContainer = document.createElement('div');
rivContainer.id = 'rivContainer';
rivContainer.style.cssText = `
  max-width: 100%;
  max-height: 100%;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
rivContainer.style.display = 'none';

document.body.appendChild(overlay);
document.body.appendChild(rivContainer);

function hideOverlay() {
  overlay.style.display = 'none';
  rivContainer.style.display = 'block';

  // Assuming you have a library like Riv.js loaded
  const myRiv = new Riv(['https://CristianoClemente.github.io/preloaderJSLottie/logo.riv']); // Replace with actual RIV file path
  myRiv.addTo(rivContainer);
  myRiv.play(); // Start playback of the RIV animation
}

document.addEventListener('DOMContentLoaded', () => {
  hideOverlay(); // Teste sem o setTimeout
});

window.addEventListener('load', hideOverlay);


const burgerButton = document.getElementById('burgerButton');
const leftPanel = document.querySelector('.LeftPanel');

burgerButton.addEventListener('click', () => {
    leftPanel.style.display = leftPanel.style.display === 'none' ? 'block' : 'none';
});

// Detect orientation change
window.addEventListener('orientationchange', () => {
    if (window.matchMedia("(orientation: landscape)").matches) {
        leftPanel.style.display = 'block'; // Show panel in landscape
    } else {
        leftPanel.style.display = 'none'; // Hide panel in portrait
    }
});
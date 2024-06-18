let count = 0;
const clickableArea = document.getElementById('clickable-area');
const clickCountDisplay = document.getElementById('click-count');

clickableArea.addEventListener('click', () => {
    count++;
    clickCountDisplay.textContent = count;
});

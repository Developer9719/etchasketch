// Create 16x16 grid
const sketchContainer = document.querySelector('.sketch-container');
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
    const sketchDiv = document.createElement('div');
    sketchDiv.classList.add('sketch-div');
    sketchContainer.appendChild(sketchDiv);
}
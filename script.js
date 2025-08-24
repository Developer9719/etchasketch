// Create 16x16 grid
const sketchContainer = document.querySelector('.sketch-container');
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
    const sketchDiv = document.createElement('div');
    sketchDiv.classList.add('sketch-div');
    sketchContainer.appendChild(sketchDiv);
}

// Create a hover effect
const sketchDivs = document.querySelectorAll('.sketch-div');

function draw() {
    sketchDivs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'lightblue';
        });
    });
}
draw();

// Clear art
function clearArt() {
    sketchDivs.forEach(div => {
        div.style.backgroundColor = '';
    });
}

// Resize Grid
function resizeGrid() {
    const newSize = prompt("Enter new grid size (e.g. 16 for 16x16):");
    if (newSize && !isNaN(newSize)) {
        // Clear existing grid
        sketchContainer.innerHTML = '';
        // Create new grid
        for (let i = 0; i < newSize * newSize; i++) {
            const sketchDiv = document.createElement('div');
            sketchDiv.classList.add('sketch-div');
            sketchContainer.appendChild(sketchDiv);
        }
    }
    draw();
}
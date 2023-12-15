const GRIDSIDE = 600; // Side length of the square sketch area in pixels
let squaresPerSide = 16; // Number of squares per side of the grid

// Sketch area setup
const sketchArea = document.getElementById("sketch-area");
sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;

// Function to create grid cells
function createGridCells() {
  // Calculate total number of squares
  const numOfSquares = squaresPerSide * squaresPerSide;
  // Calculate width or height of each grid cell
  const widthOrHeight = `${GRIDSIDE / squaresPerSide - 2}px`;

  // Loop to create grid cells
  for (let i = 0; i < numOfSquares; i++) {
    // Create a new grid cell (div element)
    const gridCell = document.createElement("div");

    // Set the width and height of the grid cell
    gridCell.style.width = widthOrHeight;
    gridCell.style.height = widthOrHeight;

    // Add a class to the grid cell for styling purposes
    gridCell.classList.add("cell");

    // Add a mouseover event listener to change the background colour to black
    gridCell.addEventListener("mouseover", () => {
      gridCell.style.backgroundColor = "black";
    });

    // Append the grid cell to the sketch area
    sketchArea.appendChild(gridCell);
  }
}

// Call the function to create grid cells
createGridCells();

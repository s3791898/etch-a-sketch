const GRIDSIDE = 600; // Side length of the square sketch area in pixels
let squaresPerSide = 16; // Number of squares per side of the grid

// Sketch area setup
const sketchArea = document.getElementById("sketch-area");
sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;

// Function to create grid cells
function createGridCells() {
  // Remove existing grid cells
  while (sketchArea.firstChild) {
    sketchArea.removeChild(sketchArea.firstChild);
  }

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

    // Add mousedown event to start drawing
    gridCell.addEventListener("mousedown", startDrawing);

    // Append the grid cell to the sketch area
    sketchArea.appendChild(gridCell);
  }
}

function startDrawing(event) {
  // Change the background colour when drawing
  event.target.style.backgroundColor = generateRandomColour();

  // Add mousemove and mouseup event listeners
  document.addEventListener("mousemove", draw);
  document.addEventListener("mouseup", stopDrawing);
}

function draw(event) {
  // Change the background colour while moving the mouse during drawing
  if (event.target.classList.contains("cell")) {
    event.target.style.backgroundColor = generateRandomColour();
  }
}

function stopDrawing() {
  // Remove mousemove and mouseup event listeners to stop drawing
  document.removeEventListener("mousemove", draw);
  document.removeEventListener("mouseup", stopDrawing);
}

function generateRandomColour() {
  // Generates random rgb values and returns it in the correct format
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

// Call the function to create grid cells
createGridCells();

function promptForNewSize() {
  let gridSize = Number(
    prompt("Enter the number of squares per side for the new grid")
  );

  if (gridSize >= 16 && gridSize <= 100) {
    squaresPerSide = gridSize;
    createGridCells();
  } else if (gridSize <= 0) {
    alert("Please enter a positive number");
  } else {
    alert("Please enter a size between 16 - 100");
  }
}

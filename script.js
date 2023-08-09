const gridcontainer = document.getElementById("grid");
const gridSizeSlider = document.getElementById("gridSize");
const gridSizeValue = document.getElementById("gridSizeValue");
const resetButton = document.getElementById("resetButton");
const blackButton = document.getElementById("blackButton");

gridcontainer.style.boxSizing = "border-box";

let gridnumber = parseInt(gridSizeSlider.value);// Changing grid size according to slider
let cellSize = 100 / gridnumber; // Calculating how much a single cell will take space over a %100 portion inside of its container
let useBlackColor = false;
let isColoring = false;
let lastCellColored = null; 

function getRandomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
}

function createGrid() {
    gridcontainer.innerHTML = ''; // Removing the older cells after changing the grid size
    for (let i = 0; i < gridnumber * gridnumber; i++) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.style.backgroundColor = "white";
        cell.style.borderRadius = "3px"
        cell.style.border = "1px solid black";
        cell.style.boxSizing = "border-box";
        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;

        cell.addEventListener("mousedown", () => {
            isColoring = !isColoring;
            if (isColoring) {
                lastCellColored = cell;
                colorCell(cell);
            }
        });

        cell.addEventListener("mousemove", () => {
            if (isColoring && cell !== lastCellColored) {
                lastCellColored = cell;
                colorCell(cell);
            }
        });
        gridcontainer.appendChild(cell);
    }
}

function colorCell(cell) {
    const color = useBlackColor ? "black" : getRandomColor(); // Coloring the cells according to selected color mode
    cell.style.backgroundColor = color;
}

createGrid();

gridSizeSlider.addEventListener("input", () => { // Updating the grid size when slider value changes
    gridnumber = parseInt(gridSizeSlider.value);
    gridSizeValue.textContent = `Grid size: ${gridnumber}x${gridnumber}`;
    cellSize = 100 / gridnumber;
    createGrid();
});

resetButton.addEventListener("click", () => { // Resetting the grid by running createGrid function
    createGrid();
});

blackButton.addEventListener("click", () => { // Changing the boolean value of useBlackColor when clicked the button
    useBlackColor = !useBlackColor;
    blackButton.classList.toggle("active", useBlackColor);
});


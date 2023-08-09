const gridcontainer = document.getElementById("grid");
gridcontainer.style.boxSizing = "border-box";
let gridnumber = 10;
const cellSize = 100 / gridnumber; // Calculating how much space a single cell should take over %100 portion

function getRandomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
}

for (let i = 0; i < gridnumber * gridnumber; i++) { // Creating the cells and appending to the container
    const cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.style.backgroundColor = "white";
    cell.style.border = "1px solid black";
    cell.style.boxSizing = "border-box";
    cell.style.width = `${cellSize}%`;
    cell.style.height = `${cellSize}%`;
    cell.addEventListener("mouseover", () => { // Adding event listener to each cell for random coloring on mouseover
        const randomColor = getRandomColor();
        cell.style.backgroundColor = randomColor;
    });
    gridcontainer.appendChild(cell);
}

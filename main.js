// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100 ; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let activePen = false;  

// Create variable that will contain each div with the class of color
const allColors = document.querySelectorAll('#palette div.color');

// Create global variable that will contain the '#current-color' element
const currentColor = document.querySelector('#current-color');

// Loop through 'color' variable and add an event listener for each color that will change the background of the '#current-color' element to the clicked color
allColors.forEach((colorElement) => {
  colorElement.addEventListener('click', (event) => {
    currentColor.style.background = event.target.style.backgroundColor;

  });
});

// Create a variable that contain each div with the class of cell
const allCells = document.querySelectorAll('#canvas div.cell');

// Loop through the cellArray 
allCells.forEach((cell) => {
  // Add an event listener for when each cell is clicked
  cell.addEventListener('mouseover', draw);
  // Add an event listener for when each cell is dbl clicked, change background to white
  cell.addEventListener('dblclick', erase);

  cell.addEventListener('click', togglePen);
});

function erase(event) {
  event.target.style.background = 'white';
}

function draw() {
  // Change the background of clicked cell to be the same as the background of the '#current-color' element
  if (activePen) {
    this.style.backgroundColor = currentColor.style.backgroundColor;
  }
  
}

function togglePen(event) {
  if (!activePen) {
    activePen = true;
  } else {
    activePen = false;
  }
}

// Create a button to clear the screen
const eraseAll = document.createElement('div');
eraseAll.classList.add('color');
eraseAll.style.cssText = 'border-radius: 10px; position: absolute; background: silver; ';
eraseAll.innerText = 'Clear All';

const colorPalette = document.querySelector('#palette');
colorPalette.append(eraseAll);
 

// Add an event listener on 'eraseAll' element
eraseAll.addEventListener('click', () => {
  // Within the anonymous function loop through each 'allCells' element and change the background to white
  allCells.forEach((cell) => {
    // Change the background of each 'allCells' element to white
    cell.style.background = 'white';
  });
});

// Create instructions for operating pen
const instructions = document.createElement('h2');
instructions.innerText = "Click on the color you want to draw with and it will appear on the square palette. Click inside of the canvas to toggle the pen on and off. You can double click a square to erase that square.";

const canvas = document.querySelector('#canvas');
canvas.before(instructions);

instructions.style.cssText = 'text-align: center;';





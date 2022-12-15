// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100 ; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
// let activePen = false;  

// Create variable that will contain each div with the class of color
const allColors = document.querySelectorAll('#palette div.color');

// Create global variable that will contain the '#current-color' element
const currentColor = document.querySelector('#current-color');

// Loop through 'color' variable and add an event listener for each color that will change the background of the '#current-color' element to the clicked color
allColors.forEach((colorElement) => {
  colorElement.addEventListener('click', () => {
    currentColor.style.background = colorElement.style.backgroundColor;
  });
});

// Create a variable that contain each div with the class of cell
const allCells = document.querySelectorAll('#canvas div.cell');

// Loop through the cellArray 
allCells.forEach((cell) => {
  // Add an event listener for when each cell is clicked
  cell.addEventListener('click', draw);
  // Add an event listener for when each cell is dbl clicked, change background to white
  cell.addEventListener('dblclick', erase);

  // cell.addEventListener('click', togglePen);
});

function erase(event) {
  event.target.style.background = 'white';
}

function draw(event) {
  // Change the background of clicked cell to be the same as the background of the '#current-color' element
  // if (activePen) {
    event.target.style.backgroundColor = currentColor.style.backgroundColor;
  // }
  
}

// function togglePen(event) {
//   if (!activePen) {
//     activePen = true;
//   } else {
//     activePen = false;
//   }
// }

// console.log(allColors)

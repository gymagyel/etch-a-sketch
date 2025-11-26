const gridContainer = document.getElementById('grid-container');
const GRID_SIZE = 500; 

function createGrid (size) {
      
    
    for (let i =0; i< size * size; i++) {
        const square = document.createElement ('div');
      
        square.className = 'grid-square';
            const squareSize = GRID_SIZE / size;
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () =>{
            square.style.background = 'black';
        })


        gridContainer.appendChild(square)
    }
}
createGrid(16)

const sizeBtn = document.querySelector('#sizeBtn')

sizeBtn.addEventListener('click', () =>{
       const input = prompt('How many squares per side? (max 100)')
    const size = parseInt(input);
   

if (isNaN(size) || size <= 0 || size > 100) {
  alert('Please enter a number between 1 and 100');
  return;

}


gridContainer.innerHTML = ''
createGrid(size)

})
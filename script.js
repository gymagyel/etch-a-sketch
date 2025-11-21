const gridContainer = document.getElementById('grid-container');
const gridSize = 16;

function createGrid () {
    for (let i =0; i< gridSize * gridSize; i++) {
        const square = document.createElement ('div');
        square.className = 'grid-square';

        square.addEventListener('mouseover', () =>{
            square.style.background = 'black';
        })


        gridContainer.appendChild(square)
    }
}
createGrid ();
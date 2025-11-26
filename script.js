const gridContainer = document.getElementById('grid-container');
const GRID_SIZE = 500; 

function createGrid (size) {
      gridContainer.innerHTML = ''
    
    for (let i =0; i< size * size; i++) {
        const square = document.createElement ('div');
      
        square.className = 'grid-square';
        square.dataset.darkness = 0; 
            const squareSize = GRID_SIZE / size;
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () =>{
        

 let darkness = Number(square.dataset.darkness) || 0; // read

  if (darkness < 10) {
    darkness++;                                      // update
    square.dataset.darkness = darkness;              // save
  }

 if (darkness ===1){
                
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    square.style.background = bgColor;
    }
     const opacity = darkness / 10;
      square.style.opacity = opacity;

      console.log('darkness:', darkness, 'opacity:', opacity);
    });



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



createGrid(size)

})
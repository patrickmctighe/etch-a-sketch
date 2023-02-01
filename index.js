function createGrid(rowNum){
    const container = document.querySelector('.container')
    const gridSize = (rowNum * rowNum) + rowNum
    const mod = rowNum + 1

    for (let i = 1 ; i<gridSize; i++){
        const boxes = document.createElement('div')
        boxes.classList.add('hover')
        
        boxes.addEventListener('mousedown',()=>{
            boxes.style.cssText = 'background-color:black;'
        })
        
if (i % mod === 0) {
    boxes.style.cssText = 
    'border: 0; height: 0; width: 100%'
}else {
    boxes.style.cssText = 
    "border: 1px solid black; height: 25px; width: 25px";
  } 


    container.appendChild(boxes)
}}

function addBlack ()
    createGrid(16)
   
   
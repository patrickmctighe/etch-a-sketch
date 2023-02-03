let color = "black";
let click = true;
function populateBoard(size){
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.remove());
   board.style.gridTemplateColumns = `repeat(${size},1fr)`;
   board.style.gridTemplateRows= `repeat(${size},1fr)`;
    
   let amount = size * size

   for (let i = 0 ; i< amount; i++){
   var square = document.createElement("div");
   square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor= 'white';
    board.insertAdjacentElement("beforeend",square);
       }
    }   
      


   populateBoard(16);

   function changeSize(input){
    if ( input < 0 || input > 100){
        console.log("number too high or low!")
    } else {
        populateBoard(input)
   };}

   function colorSquare(){
    if (click){
    if(color === 'rainbow'){
        this.style.backgroundColor= `hsl(${Math.random() * 360}, 100%,50%)`;
    } else {
    this.style.backgroundColor = color;
   }}}

   function changeColor(choice){
    color = choice
   }

   function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
   }

   document.querySelector("body").addEventListener("click", (e) => {
    if(e.target.tagName != 'BUTTON'){
    click= !click;
    if (click) {
        document.querySelector(".mode").textContent = "Status: Ready to draw";
    } else{
        document.querySelector(".mode").textContent = "Status: Click to draw!";
    }
    }
   })
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let messageCont = document.querySelector(".msg-container");

let turn0 = true ;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () =>{
    turn0 = true ;
    enableBoxes();
    messageCont.classList.add("hide");

}

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
       
       if(turn0 === true){
        box.innerText = "O";
        box.style.color = "#393E41"
        turn0 = false;
       }
       else{
        box.innerText = "X" ;
        box.style.color = "#AB8476"
        turn0 = true;
       }
       box.disabled = true;

       checkWin();
    });
});

const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
        
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Winner is ${winner}`;
    messageCont.classList.remove("hide");  
    disableBox();       
}

const checkWin = () => {
   for(let pattern of winPattern){
       let posVal1 = boxes[pattern[0]].innerText;
       let posVal2 = boxes[pattern[1]].innerText;
       let posVal3 = boxes[pattern[2]].innerText;

       if(posVal1 != "" && posVal2 != "" && posVal3 != "")
        {
            if(posVal1 == posVal2 && posVal2 == posVal3)
                { 
                    showWinner(posVal1); 
                }
               /* else{
                    drawGame();
                }*/
        }
        
   }
}

const drawGame = () => {
    msg.innerText = `there is a draw`;
    messageCont.classList.remove("hide");
}

reset.addEventListener("click" , resetGame);
newGame.addEventListener("click" , resetGame);
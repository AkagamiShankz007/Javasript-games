let boxes = document.querySelectorAll(".box");
let Reset = document.querySelector("#Reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".mcontainer");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],    
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("Box was clicked!");

        if(turn0)
            {
            box.innerText = "O";
            turn0 = false;
        }
        else
            {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count ++;

        checkWinner();

        if (count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.enable = true;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner = () => {
    for(pattern of winPatterns)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner!" , pos1val);
                showWinner(pos1val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
Reset.addEventListener("click",resetGame);
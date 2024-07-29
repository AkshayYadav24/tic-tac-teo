let btn = document.querySelectorAll(".btn");
let massage = document.querySelector("#message");
let msgContain = document.querySelector(".msg-contain");
let reset = document.querySelector(".reset");
let newBtn = document.querySelector(".newBtn");

let turn0 = true;

let checkPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

disable = () =>{
    for(box of btn) {
        box.disabled = true;
    }
};

const winMassage = (win) => {
    message.innerText = `Congratulation! Winner is ${win}`;
    msgContain.classList.remove("hide");
};

const checkWinner = () =>{
    let count=0;
    for(let pattern of checkPatterns) {
        let position1 = btn[pattern[0]].innerText;
        let position2 = btn[pattern[1]].innerText;
        let position3 = btn[pattern[2]].innerText;

        if(position1 !== ""  && position2 !== ""  && position3 !== "") {
            // console.log(pattern);
            ++count;
            if(position1 === position2 && position2 === position3) {
                winMassage(position1);
                disable();
            }
        }
    }
    console.log("*********************");
    return count;
};

btn.forEach((box) => {
    count = 0;
    box.addEventListener('click',() => {
        if(turn0) {
            box.innerText = "0";
            box.style.backgroundColor="rgb(65, 6, 6)";
            turn0 = false;
        } else {
            box.innerText = "X";
            box.style.backgroundColor="rgb(83, 83, 16)";
            turn0 = true;
        }
        box.disabled = true;
        let count = checkWinner();
        if(count === 8) {
            drawMsg();
        }
        
    })
});

drawMsg = () => {
    message.innerText = "Match are draw";
};


enable = () => {
    for(box of btn) {
        box.disabled = false;
        box.innerText="";
        box.style.backgroundColor="white";
    }
};

resetBox = () =>{
    if(turn0) {
        turn0 = false
    } else {
        turn0 = true;
    }
    enable();
    msgContain.classList.add("hide");
};

reset.addEventListener('click',resetBox);
newBtn.addEventListener('click',resetBox);
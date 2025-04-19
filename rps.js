let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");


const gencomp = () => {
    const options = ["rock","paper","scissors"];
    //rock , paper, scissors
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
} 

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw!!"
    msg.style.backgroundColor = "blue";
}

const showwinner = (userWin, userchoice, compchoice) => {
    if(userWin) {
        user++;
        userscore.innerText = user;
        msg.innerText = `You Win!! your choice-${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        //user-score.innerText = `${userscore++}`;
    }
    else{
        comp++;
        compscore.innerText = comp;
        msg.innerText = `You lose!! ${compchoice} beats your choice-${userchoice}`;
        msg.style.backgroundColor = "red";
        //comp-score.innerText = `${compscore++}`;
    }
}

const playgame = (userchoice) => {
    console.log(`user choice is : ${userchoice}`);
    //Generate computer choice by function this is modular way of code
    const compchoice = gencomp();
    console.log(`computer choice is : ${compchoice}`);

    if(userchoice == compchoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            //scissors, paper
            userWin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userWin = compchoice === "scissors" ? false : true;
        }
        else{
            userWin = compchoice === "rock" ? false : true;
        }
        showwinner(userWin, userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
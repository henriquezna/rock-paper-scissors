let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const randNum = Math.ceil(Math.random()*3);
    switch (randNum){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors"
        default:
            return "Rock";
    }
}

function playerPlay(){
    let sign = window.prompt("Rock, Paper, or Scissors?");
    sign = sign.toLowerCase();
    //Check if valid
    if(sign !== "rock" || sign !== "paper" || sign !== "scissors"){
        sign = "rock";
    }
    return `${sign[0].toUpperCase()}${sign.substr(1)}`;
}

// function round(computerSelection, playerSelection){
//     let winner = "";
//     if(computerSelection === playerSelection){
//         winner = "It's a tie!"
//     }else if (computerSelection === "Rock"){
//         playerSelection === "Scissors" ? winner = "You Lose" : winner = "You Win!";
//     }else if (computerSelection === "Paper"){
//         playerSelection === "Scissors" ? winner = "You Win!" : winner = "You Lose";
//     }else{
//         playerSelection === "Rock" ? winner = "You Win!" : winner = "You Lose";
//     }

//     console.log("Computer: " + computerSelection + " You: " + playerSelection);
//     return winner;
// }

// function game(){
    // for(i = 0; i < 5; i++){
    //     console.log("ROUND " + (i+1));
    //     console.log(round(computerPlay(), playerPlay()));
    // }
// }

function reset(){
    playerScore = 0;
    computerScore = 0;
}

function playRound(playerSelection){
    const computerSelection = computerPlay();

    const div = document.querySelector("#results");
    const divScore = document.querySelector("#score");

    let winner = "";
    if(computerSelection === playerSelection){
        winner = "It's a tie!"
    }else if (computerSelection === "Rock"){
        playerSelection === "Scissors" ? winner = "You Lose" : winner = "You Win!";
    }else if (computerSelection === "Paper"){
        playerSelection === "Scissors" ? winner = "You Win!" : winner = "You Lose";
    }else{
        playerSelection === "Rock" ? winner = "You Win!" : winner = "You Lose";
    }

    console.log("Computer: " + computerSelection + " You: " + playerSelection);
    div.textContent = "Computer: " + computerSelection + " You: " + playerSelection + " " + winner;

    if(winner === "You Win!"){
        playerScore++;
    }else{
        computerScore++;
    }

    if(playerScore === 5){
        div.textContent = "YOU WON!";
        divScore.textContent= "Player: " + playerScore + " Computer: " + computerScore;
        reset();
    }else if(computerScore === 5){
        div.textContent = "COMPUTER WON!";
        divScore.textContent= "Player: " + playerScore + " Computer: " + computerScore;
        reset();
    }else{
        divScore.textContent= "Player: " + playerScore + " Computer: " + computerScore;
    }

    // return winner;
}

// console.log("Welcome!");
// game();
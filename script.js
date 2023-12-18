let userScore = 0;
let compScore = 0; 

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreText = document.querySelector("#user-score");
const compScoreText = document.querySelector("#comp-score");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random()*3)
  return options[randomIndex]
}

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin){
    userScore++;
    userScoreText.innerText = userScore;
    msg.innerText = `You Won! ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green";
    // console.log("win")
  }else{
    compScore++;
    compScoreText.innerText = compScore;
    msg.innerText = `You Loose! ${compChoice} beats ${userChoice}`
    msg.style.backgroundColor = "red";
    // console.log("loose")
  }
}

const drawGame = () => {
  msg.innerText = "Game Draw"
  msg.style.backgroundColor = "#081b31";
  // console.log("Draw")
}

const playGame = (userChoice) => {
  // console.log("choice was clicked",userChoice)
  const compChoice = genCompChoice();
  // console.log("choice was clicked",compChoice)

  if (userChoice === compChoice){
    drawGame();
  }else {
    let userWin = true;
    if (userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper"){
      userWin = compChoice === "scissor" ? false : true;
    }else{
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice, compChoice)
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
    playGame(userChoice)
  })
})
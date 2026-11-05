let userScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll(".btn");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");
const genCompChoice = () => {
  const options = ["Stone", "Papers", "Scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = (userChoice) => {
  const capitalizedChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
  msg.innerText = `Both Picked ${capitalizedChoice}, It Was A Draw`;
};
const showWinner = (userWin, userChoice, compChoice) => {
  const capUser = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
  const capComp = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${capUser} Beats ${capComp}`;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost. ${capComp} Beats Your ${capUser}`;
  }
};
const playGame = (userChoice) => {
  // Convert user choice to match capitalized display format if needed
  const formattedUserChoice = userChoice.toLowerCase();
  const compChoice = genCompChoice().toLowerCase();
  
  if (formattedUserChoice === compChoice) {
    drawGame(formattedUserChoice);
  } else {
    let userWin = true;
    if (formattedUserChoice === "stone") {
      userWin = compChoice === "papers" ? false : true;
    } else if (formattedUserChoice === "papers") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "stone" ? false : true;
    }
    showWinner(userWin, formattedUserChoice, compChoice);
  }
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("id");
    playGame(userChoice);
  });
});
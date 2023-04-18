let hands = ["Rock", "Paper", "Scissors"];
let winsNeeded = 2;
const gameLog = document.querySelector("#game");
function getHand() {
  let choice = parseInt(Math.random() * 10) % 3;
  return hands[choice];
}
let playerOne = {
  name: document.querySelector("#pOne").innerHTML,
  play: getHand,
  wins: 0,
};
let playerTwo = {
  name: "Earl",
  play: getHand,
  wins: 0,
};
let playerThree = {
  name: "Jones",
  play: getHand,
  wins: 0,
};
let playerFour = {
  name: "Mufasa",
  play: getHand,
  wins: 0,
};
function playRound(p1, p2) {
  let hand1 = playerOne.play();
  let hand2 = playerTwo.play();
  let roundWinner = null;
  let nextRound = document.createElement("div");
  let p1Hand = document.createElement("p");
  let p2Hand = document.createElement("p");
  let roundResult = document.createElement("p");
  if (hand1 === hand2) {
    p1Hand.innerHTML = p1.name + " threw: " + hand1 + ".";
    p2Hand.innerHTML = p2.name + " threw: " + hand2 + ".";
    roundResult.innerHTML = "It's a tie!";
    roundWinner = null;
  } else if (hand1 === "Rock" && hand2 === "Scissors") {
    p1Hand.innerHTML = p1.name + " threw: " + hand1 + ".";
    p2Hand.innerHTML = p2.name + " threw: " + hand2 + ".";
    roundResult.innerHTML = p1.name + " wins this round!";
    roundWinner = p1;
  } else if (hand1 === "Paper" && hand2 === "Rock") {
    p1Hand.innerHTML = p1.name + " threw: " + hand1 + ".";
    p2Hand.innerHTML = p2.name + " threw: " + hand2 + ".";
    roundResult.innerHTML = p1.name + " wins this round!";
    roundWinner = p1;
  } else if (hand1 === "Scissors" && hand2 === "Paper") {
    p1Hand.innerHTML = p1.name + " threw: " + hand1 + ".";
    p2Hand.innerHTML = p2.name + " threw: " + hand2 + ".";
    roundResult.innerHTML = p1.name + " wins this round!";
    roundWinner = p1;
  } else {
    p1Hand.innerHTML = p1.name + " threw: " + hand1 + ".";
    p2Hand.innerHTML = p2.name + " threw: " + hand2 + ".";
    roundResult.innerHTML = p2.name + " wins this round!";
    roundWinner = p2;
  }
  gameLog.appendChild(nextRound);
  nextRound.setAttribute("class", "round");
  nextRound.appendChild(p1Hand);
  nextRound.appendChild(p2Hand);
  nextRound.appendChild(roundResult);
  return roundWinner;
}
function playGame(player1, player2, playUntil) {
  let roundEnd = document.createElement("div");
  let finalWinner = document.createElement("p");
  let gameWinner = null;
  while (player1.wins < playUntil && player2.wins < playUntil) {
    let winner = playRound(player1, player2);
    if (winner === player1) {
      player1.wins += 1;
    } else if (winner === player2) {
      player2.wins += 1;
    }
    console.log(
      "The score is: " +
        player1.name +
        "- " +
        player1.wins +
        " to " +
        player2.name +
        "- " +
        player2.wins
    );
    document.querySelector("#pOneScore").innerHTML = player1.wins;
    document.querySelector("#pTwoScore").innerHTML = player2.wins;
    gameLog.appendChild(roundEnd);
  }
  if (player1.wins === playUntil) {
    gameWinner = player1;
  } else {
    gameWinner = player2;
  }
  finalWinner.innerHTML = gameWinner.name + " is the winner of this match!";
  roundEnd.appendChild(finalWinner);
  return gameWinner;
}
function playTournament(first, second, third, fourth, playUntil) {
  let firstRound = playGame(first, second, playUntil);
  console.log("The winner is " + firstRound.name + "!");
  firstRound.wins = 0;
  console.log(firstRound.name);
  let secondRound = playGame(third, fourth, playUntil);
  console.log(secondRound.name);
  console.log("The winner is " + secondRound.name + "!");
  secondRound.wins = 0;
  let finalRound = playGame(firstRound, secondRound, playUntil);
  console.log(finalRound.name + " is world champion!");
}
//press register fills in the name
document.querySelector("#playerNameForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let registeredName = document.querySelector("input#registerName").value;
  playerOne.name = registeredName;
  console.log(playerOne.name);
  document.querySelector("#pOne").innerHTML = playerOne.name;
});
//Enter Number of Rounds
document.querySelector("#numberRoundsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  winsNeeded = document.querySelector("input#roundsToWin").value;
  console.log(winsNeeded);
  return winsNeeded;
});
//Press go plays a game
document.querySelector("#throwHandsButton").addEventListener("click", () => {
  playGame(playerOne, playerTwo, winsNeeded);
});


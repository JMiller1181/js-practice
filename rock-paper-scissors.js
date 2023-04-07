let hands = ["Rock", "Paper", "Scissors"];
function getHand() {
  let choice = parseInt(Math.random() * 10) % 3;
  return hands[choice];
}
let playerOne = {
  name: "James",
  play: getHand,
  wins: 0,
};
let playerTwo = {
  name: "Earl",
  play: getHand,
  wins: 0,
};
function playRound(p1, p2) {
  let hand1 = playerOne.play();
  let hand2 = playerTwo.play();
  if (hand1 === hand2) {
    console.log(p1.name + " threw: " + hand1 + ".");
    console.log(p2.name + " threw: " + hand2 + ".");
    console.log("It's a tie!");
    return null;
  } else if (hand1 === "Rock" && hand2 === "Scissors") {
    console.log(p1.name + " threw: " + hand1 + ".");
    console.log(p2.name + " threw: " + hand2 + ".");
    console.log(p1.name + " wins this round!");
    return p1;
  } else if (hand1 === "Paper" && hand2 === "Rock") {
    console.log(p1.name + " threw: " + hand1 + ".");
    console.log(p2.name + " threw: " + hand2 + ".");
    console.log(p1.name + " wins this round!");
    return p1;
  } else if (hand1 === "Scissors" && hand2 === "Paper") {
    console.log(p1.name + " threw: " + hand1 + ".");
    console.log(p2.name + " threw: " + hand2 + ".");
    console.log(p1.name + " wins this round!");
    return p1;
  } else {
    console.log(p1.name + " threw: " + hand1 + ".");
    console.log(p2.name + " threw: " + hand2 + ".");
    console.log(p2.name + " wins this round!");
    return p2;
  }
}
function playGame() {
  while (playerOne.wins < 3 && playerTwo.wins < 3) {
    let winner = playRound(playerOne, playerTwo);
    if (winner === playerOne) {
      playerOne.wins += 1;
    } else if (winner === playerTwo) {
      playerTwo.wins += 1;
    }
    console.log(
      "The score is: " +
        playerOne.name +
        "- " +
        playerOne.wins +
        " to " +
        playerTwo.name +
        "- " +
        playerTwo.wins
    );
  }
  if (playerOne.wins === 3) {
    console.log("The winner is " + playerOne.name + "!");
  } else {
    console.log("The winner is " + playerTwo.name + "!");
  }
}
playGame();

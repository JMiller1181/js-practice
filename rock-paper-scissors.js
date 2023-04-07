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
function playGame(player1, player2, playUntil) {
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
  }
  if (player1.wins === playUntil) {
    return player1;
  } else {
    return player2;
  }
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
// playGame(playerOne, playerTwo, 7);
playTournament(playerOne, playerTwo, playerThree, playerFour, 3);
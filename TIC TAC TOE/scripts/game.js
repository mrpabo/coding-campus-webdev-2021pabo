//section Active Game visible +names aviable
function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please enter Player names!");
    return;
  }
  gameAreaElement.style.display = "block";
}
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function selectedGameField(event) {
  const selectedField = event.target;
  const selectedRow = selectedField.dataset.row - 1;
  const selectedColumn = selectedField.dataset.col - 1;

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");
  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  console.log(gameData);

  switchPlayer();
}
//check rows for equality
function checkGameForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  //check columns for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  //check diagonal Top left to Buttom
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][i] > 0 &&
      gameData[i][i] === gameData[i][i] &&
      gameData[i][i] === gameData[i][i]
    ) {
      return gameData[i][i];
    }
  }

}

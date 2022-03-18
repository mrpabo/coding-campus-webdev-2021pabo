// function--> modal + backdrop ein

function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  console.log(editedPlayer);
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  enteredPlayerName = formData.get("playername");

  const updatedPlayerNameElement = document.getElementById(
    "player-" + editedPlayer + "-name"
  );
  updatedPlayerNameElement.textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;

  console.log(players);
  closePlayerConfig();
}

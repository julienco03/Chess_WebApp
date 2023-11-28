"use strict";

$(document).ready(function () {
  const popup = $("#popup");
  const overlay = $("#popup-overlay");

  function openPopup() {
    popup.show();
    overlay.show();
  }

  function closePopup() {
    popup.hide();
    overlay.hide();
  }

  openPopup();

  // Füge einen Event Listener für das Schließen des Popups hinzu
  $("#closeBtn").click(function () {
    const player1Name = $("#player1NameInput").val();
    const player2Name = $("#player2NameInput").val();

    if (isValidPlayerName(player1Name) && isValidPlayerName(player2Name)) {
      // Spielernamen anhand der Eingaben setzen
      $("#player1Name").text(player1Name);
      $("#player2Name").text(player2Name);
      closePopup();
    } else {
      alert("Please provide valid player names!");
    }
  });

  // Prüfe, ob ein Spielername gültig ist
  function isValidPlayerName(playerName) {
    const minLength = 3;
    const maxLength = 20;
    const regex = /^[a-zA-Z0-9_]+$/;

    return (
      playerName.length >= minLength &&
      playerName.length <= maxLength &&
      regex.test(playerName)
    );
  }
});

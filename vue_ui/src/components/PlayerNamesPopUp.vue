<template>
  <div>Popup</div>
</template>

<script>
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
      $("#player1Profile span").text(player1Name);
      $("#player2Profile span").text(player2Name);
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
</script>

<style scoped>
#popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border: 2px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
}

#popup > input {
  margin-bottom: 10px;
  border: 1px solid #000;
}

#popup-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}
</style>

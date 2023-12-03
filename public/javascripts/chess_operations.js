"use strict";

let draggedPiece = null; // vermeide ReferenceError, wenn DOMContent noch nicht geladen hat

// Schachfiguren und ihre Bildpfade
const pieceMappings = {
  K1: "black-king.png",
  Q1: "black-queen.png",
  R1: "black-rook.png",
  k1: "black-knight.png",
  B1: "black-bishop.png",
  P1: "black-pawn.png",
  K2: "white-king.png",
  Q2: "white-queen.png",
  R2: "white-rook.png",
  k2: "white-knight.png",
  B2: "white-bishop.png",
  P2: "white-pawn.png",
};

// Eine Funktion, um die textbasierten Schachfiguren durch Bilder zu ersetzen
function replaceButtonTextWithImages() {
  const buttons = document.querySelectorAll(".square");
  buttons.forEach((button) => {
    // Text innerhalb des Buttons holen
    const buttonText = button.textContent.trim();
    // Bildpfad basierend auf dem Text erstellen
    const imagePath = "assets/images/" + pieceMappings[buttonText];
    // Falls Spielfeld leer -> kein Bild, ansonsten Text durch img-Element ersetzen
    if (buttonText == "") {
      button.textContent = "";
    } else {
      button.innerHTML = '<img class="chess-piece-image" src=' + imagePath + "/>";
    }
  });
}

// Eine Funktion, welche die Button-IDs auf die entsprechenden Positionen auf dem Schachbrett setzt
function setButtonIDs() {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const positions = []; // Array für alle Positionen
  for (const number of numbers) {
    for (const letter of letters) {
      positions.push(letter + number);
    }
  }
  const buttons = document.querySelectorAll(".square");
  let i = 0;
  buttons.forEach((button) => {
    button.id = positions[i];
    i += 1;
  });
}

// Funktion zum Initialisieren der Seite
function initializeChessPage() {
  replaceButtonTextWithImages();
  setButtonIDs();

  // Drag-and-drop Funktionalität
  document.querySelectorAll(".chess-piece > img").forEach((piece) => {
    piece.setAttribute("draggable", "true");

    piece.addEventListener("dragstart", function (event) {
      draggedPiece = event.target.parentElement;
    });
  });

  document.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  document.addEventListener("drop", function (event) {
    event.preventDefault();

    if (draggedPiece) {
      const oldPosition = draggedPiece.id;
      const newPosition = event.target.id;

      if (oldPosition !== "" && newPosition !== "") {
        sendMoveToServer(oldPosition, newPosition);
        draggedPiece = null;
      }
    }
  });
}

// Funktion, die das Schachbrett nach einer AJAX-Anfrage aktualisiert
function updateChessBoard(chessBoard) {
  const chessPieces = Object.entries(chessBoard.field.field_entry);
  chessPieces.forEach((entry) => {
    $("#" + entry[1].pos).text(entry[1].figure);
  });
}

// Funktion, welche die Spieler visuell abwechseln lässt
function changePlayer() {
  const playerProfiles = document.querySelectorAll(".playerProfile");
  playerProfiles.forEach((playerProfile) => {
    playerProfile.classList.toggle("nextTurn");
  });
}

/* === EVENT LISTENER === */
$(document).ready(function () {
  initializeChessPage();
  connectWebSocket();
});

$("#navbar #newGame").click(function (event) {
  event.preventDefault();
  sendNewGameToServer();
});

$("#navbar #undoMove").click(function (event) {
  event.preventDefault();
  sendUndoMoveToServer();
});

$("#navbar #redoMove").click(function (event) {
  event.preventDefault();
  sendRedoMoveToServer();
});

/* === AJAX ANFRAGEN AN DEN PLAY SERVER === */
function sendMoveToServer(oldPosition, newPosition) {
  $.ajax({
    type: "POST",
    url: "/chess/move" + "?old=" + oldPosition + "&new=" + newPosition,
    accept: "application/json",
    contentType: "application/json",
    success: function (response) {
      updateChessBoard(response);
      changePlayer();
      initializeChessPage();
    },
    error: function (_jqXHR, _textStatus, errorThrown) {
      console.error("Fehler bei der Anfrage:", errorThrown);
    },
  });
}

function sendNewGameToServer() {
  $.ajax({
    type: "GET",
    url: "/chess/new",
    accept: "application/json",
    contentType: "application/json",
    success: function (response) {
      updateChessBoard(response);
      changePlayer();
      initializeChessPage();
    },
    error: function (_jqXHR, _textStatus, errorThrown) {
      console.error("Fehler bei der Anfrage:", errorThrown);
    },
  });
}

function sendUndoMoveToServer() {
  $.ajax({
    type: "GET",
    url: "/chess/undo",
    accept: "application/json",
    contentType: "application/json",
    success: function (response) {
      updateChessBoard(response);
      changePlayer();
      initializeChessPage();
    },
    error: function (_jqXHR, _textStatus, errorThrown) {
      console.error("Fehler bei der Anfrage:", errorThrown);
    },
  });
}

function sendRedoMoveToServer() {
  $.ajax({
    type: "GET",
    url: "/chess/redo",
    accept: "application/json",
    contentType: "application/json",
    success: function (response) {
      updateChessBoard(response);
      changePlayer();
      initializeChessPage();
    },
    error: function (_jqXHR, _textStatus, errorThrown) {
      console.error("Fehler bei der Anfrage:", errorThrown);
    },
  });
}

/* === WEBSOCKET === */
function connectWebSocket() {
    const websocket = new WebSocket("ws://localhost:9000/websocket");
    websocket.setTimeout;

    websocket.onopen = function(event) {
        console.log("Connected to Websocket");
    };

    websocket.onclose = function () {
        console.log('Connection with Websocket Closed!');
    };

    websocket.onerror = function (error) {
        console.log('Error in Websocket Occured: ' + error);
    };

    websocket.onmessage = function (e) {
        if (typeof e.data === "string") {
            let json = JSON.parse(e.data);
            console.log(json)
            updateChessBoard(json);
        }
    };
}

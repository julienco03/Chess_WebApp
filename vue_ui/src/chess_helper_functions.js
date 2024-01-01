import $ from "jquery";
import axios from "axios";

// Base URL for requests to Play Server
const BASE_URL = "127.0.0.1:9000";
export const PLAY_SERVER_URL = "http://" + BASE_URL;

// Schachfiguren und ihre Bildpfade
export const PIECE_MAPPINGS = {
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

export let draggedPiece = null; // vermeide ReferenceError, wenn DOMContent noch nicht geladen hat

// Eine Funktion, um die textbasierten Schachfiguren durch Bilder zu ersetzen
function replaceButtonTextWithImages() {
  const buttons = document.querySelectorAll(".square");
  buttons.forEach((button) => {
    // Text innerhalb des Buttons holen
    const buttonText = button.textContent.trim();
    // Bildpfad basierend auf dem Text erstellen
    const imagePath = "/chess_pieces/" + PIECE_MAPPINGS[buttonText];
    // Falls Spielfeld leer -> kein Bild, ansonsten Text durch img-Element ersetzen
    if (buttonText == "") {
      button.textContent = "";
    } else {
      button.innerHTML =
        '<img style="width: 80%;" class="chess-piece-image" src="' + imagePath + '"/>';
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
export function initializeChessPage() {
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
      const newPosition =
        event.target.tagName === "IMG" // befindet sich eine Figur (<img>) auf dem Feld (<button>)?
          ? event.target.parentElement.id
          : event.target.id;

      if (oldPosition !== "" && newPosition !== "") {
        sendMoveToServer(oldPosition, newPosition);
        draggedPiece = null;
      }
    }
  });
}

// Funktion, die das Schachbrett nach einer AJAX-Anfrage aktualisiert
export function updateChessBoard(chessBoard) {
  const chessPieces = Object.entries(chessBoard.field.field_entry);
  chessPieces.forEach((entry) => {
    $("#" + entry[1].pos).text(entry[1].figure);
  });
  replaceButtonTextWithImages();
}

// Funktion, welche die Spieler visuell abwechseln lässt
export function changePlayer(new_game) {
  // Bei einem neuen Spiel beginnt immer Spieler1
  if (new_game) {
    document.querySelector("#player1Profile").classList.add("nextTurn");
    document.querySelector("#player2Profile").classList.remove("nextTurn");
  } else {
    const playerProfiles = document.querySelectorAll(".playerProfile");
    playerProfiles.forEach((playerProfile) => {
      playerProfile.classList.toggle("nextTurn");
    });
  }
}

export function sendMoveToServer(oldPosition, newPosition) {
  axios({
    method: "post",
    url: PLAY_SERVER_URL + "/chess/move",
    params: {
      old: oldPosition,
      new: newPosition,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      updateChessBoard(response.data);
      changePlayer(false);
      initializeChessPage();
    })
    .catch((error) => {
      console.error("Fehler bei der Anfrage:", error);
    });
}

/* === WEBSOCKET === */
export function connectWebSocket() {
  const websocket = new WebSocket("ws://" + BASE_URL + "/websocket");
  websocket.setTimeout;

  websocket.onopen = function () {
    console.log("Connected to Websocket");
  };

  websocket.onclose = function () {
    console.log("Connection with Websocket Closed!");
  };

  websocket.onerror = function (error) {
    console.log("Error in Websocket Occured: " + error);
  };

  websocket.onmessage = function (e) {
    if (typeof e.data === "string") {
      let json = JSON.parse(e.data);
      updateChessBoard(json);
      changePlayer(false);
      initializeChessPage();
    }
  };
}

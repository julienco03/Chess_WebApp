<template>
  <nav id="navbar" class="px-3 sticky-top navbar navbar-light bg-light navbar-expand-sm">
    <ul class="navbar-nav">
      <li id="newGame" class="nav-item px-3" @click="sendNewGameToServer">
        <a class="nav-link">
          <img src="@/assets/images/new.png" alt="New Game Icon" />
          New Game
        </a>
      </li>
      <li id="undoMove" class="nav-item px-3" @click="sendUndoMoveToServer">
        <a class="nav-link">
          <img
            src="@/assets/images/undo.png"
            alt="Undo Icon"
            style="margin-bottom: 3px"
          />
          Undo
        </a>
      </li>
      <li id="redoMove" class="nav-item px-3" @click="sendRedoMoveToServer">
        <a class="nav-link">
          <img
            src="@/assets/images/redo.png"
            alt="Redo Icon"
            style="margin-bottom: 3px"
          />
          Redo
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from "axios";
import {
  PLAY_SERVER_URL,
  changePlayer,
  updateChessBoard,
  initializeChessPage,
} from "../chess_helper_functions.js";

export default {
  name: "ChessNavbar",
  methods: {
    sendNewGameToServer() {
      axios({
        method: "get",
        url: PLAY_SERVER_URL + "/chess/new",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          updateChessBoard(response.data);
          changePlayer(true);
          initializeChessPage();
        })
        .catch((error) => {
          console.error("Fehler bei der Anfrage:", error);
        });
    },

    sendUndoMoveToServer() {
      axios({
        method: "get",
        url: PLAY_SERVER_URL + "/chess/undo",
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
    },

    sendRedoMoveToServer() {
      axios({
        method: "get",
        url: PLAY_SERVER_URL + "/chess/redo",
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
    },
  },
};
</script>

<style scoped>
#navbar {
  width: fit-content;
  display: block;
  margin: 0 auto;
  z-index: 997;
}

#navbar li.nav-item {
  cursor: pointer;
}
</style>

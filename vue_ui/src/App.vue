<template>
  <!-- NAVIGATION -->
  <nav id="navbar" class="px-3 sticky-top navbar navbar-light bg-light navbar-expand-sm">
      <ul class="navbar-nav">
          <li id="newGame" class="nav-item px-3">
              <a class="nav-link">
                  <img src="./assets/new.png" alt="New Game Icon">
                  New Game
              </a>
          </li>
          <li id="undoMove" class="nav-item px-3">
              <a class="nav-link">
                  <img src="./assets/undo.png" alt="Undo Icon" style="margin-bottom: 3px;">
                  Undo
              </a>
          </li>
          <li id="redoMove" class="nav-item px-3">
              <a class="nav-link">
                  <img src="./assets/redo.png" alt="Redo Icon" style="margin-bottom: 3px;">
                  Redo
              </a>
          </li>
      </ul>
  </nav>

  <main>
      <!--<popup />-->
      <div class="container-fluid text-center mt-5">
          <div id="app">
              <!--<player-profile id="player1Profile" class="nextTurn"></player-profile>-->
              <ChessBoard />
              <!--<player-profile id="player2Profile"></player-profile>-->
          </div>
      </div>
  </main>
</template>

<script>
import ChessBoard from './components/ChessBoard.vue'

export default {
  name: 'App',
  components: {
    ChessBoard
  }
}
</script>

<style>
    :root {
      --body-background-color: #fff2d8;
      --light-square-color: #ffffff;
      --dark-square-color: #739072;
      --line-gap: 0px;
      --cell-size-desktop: 8vh;
      --cell-size-mobile: 8vw;
      --vertical-offset-desktop: 20px;
      --vertical-offset-mobile: 20px;
      --horizontal-offset-desktop: 10px;
      --horizontal-offset-mobile: 10px;
    }

    /* General styling */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      font-size: 16px;
    }

    body {
      font-family: 'Lato', 'Helvetica', 'sans-serif';
      background-color: var(--body-background-color);
    }

    button {
      border: none;
      cursor: pointer;
    }

    /* Navigation */
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

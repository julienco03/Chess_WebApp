<template>
  <header>
    <!-- NAVIGATION -->
    <nav
      id="navbar"
      class="px-3 sticky-top navbar navbar-light bg-light navbar-expand-sm"
    >
      <ul class="navbar-nav">
        <li id="newGame" class="nav-item px-3">
          <a class="nav-link">
            <img src="@/assets/images/new.png" alt="New Game Icon" />
            New Game
          </a>
        </li>
        <li id="undoMove" class="nav-item px-3">
          <a class="nav-link">
            <img
              src="@/assets/images/undo.png"
              alt="Undo Icon"
              style="margin-bottom: 3px"
            />
            Undo
          </a>
        </li>
        <li id="redoMove" class="nav-item px-3">
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
  </header>

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
export default {
  name: "ChessView",
};
</script>

<style scoped></style>

<template>
  <nav id="navbar" class="px-3 sticky-top navbar navbar-light bg-light navbar-expand-sm">
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
</template>

<script>
export default {
  name: "ChessNavbar",
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

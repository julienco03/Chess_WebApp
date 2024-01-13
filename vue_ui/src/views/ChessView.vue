<template>
  <navbar />

  <playernamespopup />

  <main>
    <div class="container-fluid text-center mt-5">
      <playerprofile id="player1Profile" class="nextTurn"></playerprofile>
      <chessboard />
      <playerprofile id="player2Profile"></playerprofile>
    </div>
  </main>
</template>

<script>
import ChessNavbar from "@/components/ChessNavbar.vue";
import ChessBoard from "@/components/ChessBoard.vue";
import PlayerProfile from "@/components/PlayerProfile.vue";
import PlayerNamesPopup from "@/components/PlayerNamesPopUp.vue";

export default {
  name: "ChessView",
  components: {
    navbar: ChessNavbar,
    chessboard: ChessBoard,
    playerprofile: PlayerProfile,
    playernamespopup: PlayerNamesPopup,
  },
};
</script>

<style scoped></style>

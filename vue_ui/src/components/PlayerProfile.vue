<template>
  <div class="playerProfile mt-4 mb-3 mx-auto bg-light">
    <img src="@/assets/images/avatar.jpg" alt="Player Avatar" />
    <span class="ps-2">Player</span>
  </div>
</template>

<script>
export default {
  name: "PlayerProfile",
};
</script>

<style scoped>
.playerProfile {
  text-align: left;
  width: 550px;
  height: 50px;
}

.playerProfile img {
  width: 50px;
}

.playerProfile.nextTurn {
  box-shadow: 0px 0px 5px #999;
}

@media (max-width: 650px) and (orientation: portrait) {
  .playerProfile {
    width: 60vw;
    height: 30px;
  }
  .playerProfile img {
    width: 30px;
  }
}
</style>

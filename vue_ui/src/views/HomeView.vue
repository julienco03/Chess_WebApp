<template>
  <main>
    <div class="container mt-4">
      <h1 class="text-center">Welcome to Chess!</h1>

      <div class="text-center">
        <img
          class="mt-3"
          src="@/assets/images/chessboard.png"
          alt="Chess Board"
          style="width: 80%"
        />
      </div>

      <h2 class="mt-5">Quick Links</h2>
      <ul class="list-group mt-3 mb-5">
        <li class="list-group-item">
          <a href="/rules">Read the basic chess rules</a>
        </li>
        <li class="list-group-item">
          <a href="/chess">Start a new chess game</a>
        </li>
        <li class="list-group-item">
          <a href="https://github.com/julienco03/Chess_WebApp" target="_blank"
            >Visit our GitHub repository</a
          >&nbsp;
          <img
            src="@/assets/images/external-link.svg"
            alt="External Link Icon"
            style="width: 16px; height: auto"
          />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped></style>

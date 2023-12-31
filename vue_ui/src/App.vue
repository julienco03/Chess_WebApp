<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
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
  font-family: "Lato", "Helvetica", "sans-serif";
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

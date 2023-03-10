<script setup>
import { RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <NavMenu />
  <RouterView />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $fontFamily;
}
:root {
  font-size: 62.5%;
}

body {
  background: $bgMain;
  font-size: 1.6rem;
  width: 100vw;
  height: 100vh;
}
</style>

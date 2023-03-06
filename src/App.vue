<script setup>
import Calculator from './components/Calculator.vue'
import Counter from './components/Counter.vue'
import Dashboard from './components/DashBoard.vue'
</script>

<template>
  <Dashboard />
  <Calculator />
  <Counter />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $fontFamily;
  letter-spacing: -0.02em;
}
:root {
  font-size: 62.5%;
}

body {
  background: $bgMain;
  font-size: 1.6rem;
}
</style>

<script setup>
import Calculator from './components/Calculator.vue'
import Counter from './components/Counter.vue'
</script>

<template>
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

body {
  background: $bgMain;
}
</style>

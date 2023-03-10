<template>
  <div id="appHome">
    <Component3d />
  </div>
</template>

<script>
import Component3d from './TresJs/FirstComponent3d.vue'
export default {
  components: {
    Component3d,
  }
}
</script>

<style lang="scss" scoped>
#appHome {
  background: $bgDark;
  width: 100vw;
  height: 100vh;
}
</style>

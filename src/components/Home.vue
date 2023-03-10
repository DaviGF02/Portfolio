<template>
  <div id="appHome">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three';
export default {
  data() {
    return {
      scene: null
    }
  },
  mounted() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.canvas
    });

    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.renderer.render(this.scene, this.camera)
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

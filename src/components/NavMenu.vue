<template>
  <div class="menu">
    <i @click="showMenu" class="fa-solid fa-bars"></i>
    <div class="menuLinks" :class="{ active: isActive }">
      <RouterLink @click="showMenu" class="navLink" to="/"
        ><i class="fa-solid fa-house"></i> Início</RouterLink
      >
      <RouterLink @click="showMenu" class="navLink" to="/Counter"
        ><i class="fa-solid fa-arrow-up-9-1"></i> Contador</RouterLink
      >
      <RouterLink @click="showMenu" class="navLink" to="/Dashboard"
        ><i class="fa-solid fa-chart-line"></i> Dashboard</RouterLink
      >
    </div>
    <div @click="showMenu" class="bg__menuLinks" :class="{ bg__active: isActive }"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    showMenu() {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss" scoped>
.menu {
  .menuLinks {
    position: fixed;
    height: 100vh;
    width: 30rem;
    background: $bgDark;
    display: none;
    padding: 2rem;
    opacity: 0;
    z-index: 1001;
    .fa-house {
      padding: 0 0 2rem 0;
    }
    .navLink {
      color: $envelopeWhite;
      text-decoration: none;
      font-size: 2rem;
    }
  }
  .bg__menuLinks {
    position: fixed;
    background: rgba($color: $black, $alpha: 0.25);
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    opacity: 0;
    display: none;
  }
  .active {
    animation: showMenuAnimation 0.5s;
    opacity: 1;
    display: flex;
    flex-direction: column;
  }
  .bg__active {
    animation: showMenuAnimation 0.5s;
    opacity: 1;
    display: block;
  }
  @keyframes showMenuAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .fa-bars {
    color: $envelopeWhite;
    position: fixed;
    top: 3rem;
    left: 3rem;
    font-size: 3rem;
    background-color: $bgDark;
    padding: 1rem;
    border-radius: 1rem;
    @include buttonShadow;
  }
}
</style>

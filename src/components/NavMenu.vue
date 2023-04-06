<template>
  <div class="header">
    <div class="menu">
      <i @click="showMenu" class="fa-solid fa-bars"></i>
      <div class="menuLinks" :class="{ active: isActive }">
        <RouterLink @click="showMenu" class="navLink" to="/"
          ><i class="fa-solid fa-house"></i> Início</RouterLink
        >
        <RouterLink @click="showMenu" class="navLink" to="/Dashboard"
          ><i class="fa-solid fa-chart-line"></i> Dashboard</RouterLink
        >
        <RouterLink @click="showMenu" class="navLink" to="/Climate"
          ><i class="fa-solid fa-cloud"></i> Clima</RouterLink
        >
      </div>
      <div @click="showMenu" class="bg__menuLinks" :class="{ bg__active: isActive }"></div>
    </div>
    <div class="social">
      <a href="https://www.linkedin.com/in/davi-godoy-ferreira/"
        ><i class="fa-brands fa-linkedin"></i
      ></a>
      <a href="https://github.com/DaviGF02"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.instagram.com/davigf02/?hl=pt-br"
        ><i class="fa-brands fa-instagram"></i
      ></a>
    </div>
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
@keyframes bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-10px);
  }
  50% {
    transform: scale(1.05, 0.95) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-7px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
.header {
  display: flex;
  justify-content: space-between;
  background: $bgDark;
}
.social {
  background: $bgDark;
  display: flex;
  padding: 3rem 8rem 0rem 3rem;
  a {
    width: 5rem;
    height: 5rem;
    &:hover {
      animation: bounce 1s;
      .fa-linkedin {
        color: $pictonBlue;
        transition: 0.3s;
      }
      .fa-github {
        color: $brandColor2;
        transition: 0.3s;
      }
      .fa-instagram {
        background: radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s;
      }
    }
    i {
      color: $envelopeWhite;
      font-size: 3rem;
    }
  }
}
.menu {
  .menuLinks {
    display: flex;
    gap: 3rem;
    background: $bgDark;
    padding: 3rem 3rem 3rem 3rem;
    .navLink {
      color: $envelopeWhite;
      text-decoration: none;
      font-size: 2rem;
      &:hover {
        color: #4f4cb0;
        animation: bounce 1s;
        transition: 0.3s;
      }
    }
  }
  .fa-bars {
    display: none;
  }
}
@media ($bellowTablet) {
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
      gap: 0;
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
      display: block;
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
}
</style>

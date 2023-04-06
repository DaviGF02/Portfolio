<template>
  <div id="appHome">
    <div class="presentation">
      <div class="presentation__Text">
        <h3 class="first__text">Olá, meu nome é</h3>
        <h1 class="presentation__name">Davi de Godoy Ferreira</h1>
        <span class="multiple">E eu sou um </span>
        <span class="multiple__text"></span>
      </div>
      <div class="presentation__image">
        <img src="../assets/UserImage.png" alt="User Image" />
      </div>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js'
export default {
  name: 'appHome',
  mounted() {
    const options = {
      strings: ['Desenvolvedor Front-End'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      cursorChar:
        '<span class="typed-cursor" style="color:#4c4cb0; font-size: 3rem; text-shadow: 0 0 1rem;">|</span>'
    }
    this.Typed = new Typed('.multiple__text', options)
  }
}
</script>

<style lang="scss" scoped>
#appHome {
  background: $bgDark;
  height: 100vh;
  .presentation {
    display: flex;
    justify-content: space-between;
    .presentation__Text {
      padding: 30rem 0 0 10rem;
      color: $envelopeWhite;
      .first__text {
        padding: 0 0 1rem 0;
        font-size: 4rem;
      }
      .presentation__name {
        padding: 0 0 1rem 0;
        font-size: 6rem;
      }
      .multiple {
        font-size: 3rem;
      }
      .multiple__text {
        color: $bgLightBlue;
        font-size: 3rem;
        text-shadow: 0 0 1rem;
      }
    }
    .presentation__image {
      padding: 15rem 30rem 0 0;
      animation: levitation 5s infinite;
      img {
        width: 50rem;
        box-shadow: 0 0 3rem $bgLightBlue;
        border-radius: 50px;
      }
    }
  }
}
@keyframes levitation {
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>

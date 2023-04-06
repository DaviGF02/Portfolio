<template>
  <div id="appHome">
    <div class="presentation">
      <div class="presentation__Text">
        <h3 class="first__text">Olá, meu nome é </h3>
        <h1 class="presentation__name">Davi de Godoy Ferreira</h1>
        <span class="multiple">E eu sou um </span>
        <span class="multiple__text"></span>
      </div>
      <div class="presentation__image">
      </div>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js'
export default {
  name: 'appHome',
  mounted () {
    const options = {
      strings: ['Desenvolvedor Front-End'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      cursorChar: '<span class="typed-cursor" style="color:#4c4cb0; font-size: 3rem; text-shadow: 0 0 1rem;">|</span>'
    }
    this.Typed = new Typed('.multiple__text',options)
  }
}
</script>

<style lang="scss" scoped>
#appHome {
  background: $bgDark;
  height: 100vh;
  .presentation {
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
  }
}
</style>

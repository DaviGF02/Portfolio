<template>
  <div id="appCounter">
    <div id="counter">
      <span id="titleCounter">Contador</span>
      <div v-if="count < 0">
        <span class="countMinus" id="count">{{ count }}</span>
      </div>
      <div v-else-if="count > 0">
        <span class="countPlus" id="count">{{ count }}</span>
      </div>
      <div v-else>
        <span id="count">{{ count }}</span>
      </div>
      <div class="counterButtons">
        <button @click="countMinus" class="btn decrease">Subtrair</button>
        <button @click="countReset" class="btn reset">Resetar</button>
        <button @click="countPlus" class="btn increase">Somar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app__counter',
  data() {
    return {
      count: 0
    }
  },

  methods: {
    countPlus() {
      this.count++
    },

    countMinus() {
      this.count--
    },

    countReset() {
      this.count = 0
    }
  }
}
</script>

<style lang="scss" scoped>
#appCounter {
  height: 100vh;
  display: grid;
  place-content: center;

  #counter {
    background: $bgDark;
    color: $white;
    @include bigShadow;
    border-radius: 4.8rem;
    padding: 4.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    #titleCounter {
      @include heading1;
    }
    #count {
      font-size: 8rem;
    }

    .counterButtons {
      button {
        margin: 0.8rem;
        width: 15rem;
        height: 4rem;
        border: 0;
        background: $darkGrayButton;
        border-radius: 99.9rem;
        color: $envelopeWhite;
        cursor: pointer;
        @include buttonShadow;
        @include regularText2;
        @include commonHoverBlue;
      }
    }

    .countPlus {
      color: $limeade;
    }
    .countMinus {
      color: $errorColor;
    }
  }
}
</style>

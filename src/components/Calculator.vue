<template>
  <div id="appCalculator">
    <div id="calculator">
      <div id="display">
        <div id="last-calc"></div>
        <div id="result">
          <span><i class="fa-solid fa-equals"></i></span>
          <span id="displayResult"></span>
        </div>
      </div>
      <div id="calculatorKeyboard">
        <button><i class="fa-solid fa-delete-left"></i></button>
        <button>C</button>
        <button><i class="fa-solid fa-percent"></i></button>
        <button class="tertiary"><i class="fa-solid fa-divide"></i></button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="tertiary"><i class="fa-solid fa-xmark"></i></button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button class="tertiary"><i class="fa-solid fa-minus"></i></button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button class="tertiary"><i class="fa-solid fa-plus"></i></button>
        <button><i class="fa-solid fa-plus-minus"></i></button>
        <button>0</button>
        <button>,</button>
        <button class="quartiary"><i class="fa-solid fa-equals"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator'
}
</script>

<style lang="scss" scoped>
#appCalculator {
  height: 100vh;
  display: grid;
  place-content: center;
  #calculator {
    width: 35.6rem;

    background: $bgDark;
    @include bigShadow;
    border-radius: 4.8rem;

    #display {
      margin-top: 5.4rem;
      padding-inline: 5.4rem;

      #last-calc {
        text-align: right;
        font-size: 2rem;
        line-height: 140%;
        color: $darkGray;
      }

      #result {
        margin-top: 0.8rem;
        display: flex;
        justify-content: space-between;

        span {
          font-size: 3.6rem;
          line-height: 140%;
          color: $envelopeWhite;
        }

        #displayResult {
          overflow: hidden;
          display: flex;
          flex-wrap: nowrap;
          flex-direction: row-reverse;
        }
      }
    }

    #calculatorKeyboard {
      padding: 2.6rem 3.2rem 3.2rem;

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.2rem;

      button {
        border: 0;
        width: 6.4rem;
        height: 6.4rem;
        background: $darkGrayButton;
        @include buttonShadow;
        border-radius: 99.9rem;
        font-size: 2.4rem;
        line-height: 2.8rem;
        color: $envelopeWhite;
        cursor: pointer;
        @include commonHoverBlue;
      }

      .tertiary {
        background: $darkBlueButton;
        @include buttonShadow;
      }

      .quartiary {
        background: $lightBlueButton;
        @include buttonShadow;
      }
    }
  }
}
</style>

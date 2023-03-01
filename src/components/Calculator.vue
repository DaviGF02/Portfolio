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
        <button>--</button>
        <button>C</button>
        <button>%</button>
        <button class="tertiary">/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="tertiary">*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button class="tertiary">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button class="tertiary">+</button>
        <button>+/-</button>
        <button>0</button>
        <button>,</button>
        <button class="quartiary">=</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
}
</script>

<style lang="scss" scoped>
#appCalculator {
  height: 100vh;
  display: grid;
  place-content: center;
  #calculator {
    width: 356px;

    background: $bgDark;
    @include bigShadow;
    border-radius: 48px;

    #display {
      margin-top: 54px;
      padding-inline: 54px;

      #last-calc {
        text-align: right;
        font-size: 20px;
        line-height: 140%;
        color: $darkGray;
      }

      #result {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;

        span {
          font-size: 36px;
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
      padding: 26px 32px 32px;

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;

      button {
        border: 0;
        width: 64px;
        height: 64px;
        background: $darkGrayButton;
        @include buttonShadow;
        border-radius: 999px;
        font-size: 24px;
        line-height: 28px;
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

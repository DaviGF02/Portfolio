<template>
  <div id="appCalculator">
    <div id="calculator">
      <div id="display">
        <i class="fa-solid fa-user"></i>
        <div id="last-calc"></div>
        <div id="result">
          <span>=</span>
          <span id="displayResult"></span>
        </div>
      </div>
      <div id="calculatorKeyboard">
        <button id="backspace">--</button>
        <button id="cleanCalc">C</button>
        <button id="operatorModuleCalc">%</button>
        <button id="operatorDivision" class="tertiary">/</button>
        <button id="key7">7</button>
        <button id="key8">8</button>
        <button id="key9">9</button>
        <button id="operatorMultiplier" class="tertiary">*</button>
        <button id="key4">4</button>
        <button id="key5">5</button>
        <button id="key6">6</button>
        <button id="operatorMinus" class="tertiary">-</button>
        <button id="key1">1</button>
        <button id="key2">2</button>
        <button id="key3">3</button>
        <button id="operatorPlus" class="tertiary">+</button>
        <button id="changeSignal">+/-</button>
        <button id="key0">0</button>
        <button id="decimal">,</button>
        <button id="equal" class="quartiary">=</button>
      </div>
    </div>
  </div>
</template>

<script>
// const display = document.getElementById('displayResult');
// const numeros = document.querySelectorAll('[id*=key]');
// const operators = document.querySelectorAll('[id*=operator]');
// const lastCalc = document.getElementById('last-calc');

// let newNumber = true;
// let operator;
// let lastNumber;
// let newCalc = false;

// const pendingOperator = () => operator !== undefined;

// const calculate = () => {
//     if (pendingOperator()) {
//         const currentNumber = parseFloat(display.textContent.replace(',', '.'));
//         newNumber = true;
//         const resultCalc = eval(`${lastNumber}${operator}${currentNumber}`);
//         display.textContent = resultCalc;
//     }
// }

// const updateDisplay = (displayText) => {
//     if (newNumber) {
//         display.textContent = displayText.toLocaleString('BR');
//         newNumber = false;
//     } else {
//         display.textContent += displayText.toLocaleString('BR');
//     }

//     if(newCalc) {
//         lastCalc.textContent = displayText.toLocaleString('BR');
//     } else {
//         lastCalc.textContent += displayText.toLocaleString('BR');
//     }
// }

// const lastCalcUpdate = () => newCalc = false;

// const insertNumber = (eventAction) => updateDisplay(eventAction.target.textContent);
// numeros.forEach(numero => numero.addEventListener('click', insertNumber));
// numeros.forEach(numero => numero.addEventListener('click', lastCalcUpdate));

// const selectOperator = (eventAction) => {
//     if (!newNumber) {
//         calculate();
//         newNumber = true;
//         operator = eventAction.target.textContent;
//         lastNumber = parseFloat(display.textContent.replace(',', '.'));
//     }
//     lastCalc.textContent = `${lastNumber} ${operator} `;
// }
// operators.forEach(numeros => numeros.addEventListener('click', selectOperator));

// const showResult = () => {
//     calculate();
//     operator = undefined;
//     if (!newCalc) {
//         lastCalc.textContent = `${lastCalc.textContent} = ${display.textContent}`;
//     }
//     newCalc = true;
// }
// document.getElementById('equal').addEventListener('click', showResult);

// const cleanCalc = () => {
//     display.textContent = '';
//     operator = undefined;
//     newNumber = true;
//     lastNumber = undefined;
//     newCalc = true;
// }
// document.getElementById('cleanCalc').addEventListener('click', cleanCalc);

// const removeLastNumber = () => {
//     display.textContent = display.textContent.slice(0, -1);
//     lastCalc.textContent = lastCalc.textContent.slice(0, -1);
// }
// document.getElementById('backspace').addEventListener('click', removeLastNumber);

// const changeSignal = () => {
//     newNumber = true;
//     updateDisplay(display.textContent * -1);
// }
// document.getElementById('changeSignal').addEventListener('click', changeSignal);

// const existDecimal = () => display.textContent.indexOf(',') !== -1;
// const insertDecimal = () => {
//     if (!existDecimal()) {
//         if (display.textContent.length > 0) {
//             updateDisplay(',');
//         } else {
//             updateDisplay('0,');
//             console.log(existDecimal);
//         }
//     }
// }
// document.getElementById('decimal').addEventListener('click', insertDecimal);

// const keyboardMap = {
//     '0': 'key0',
//     '1': 'key1',
//     '2': 'key2',
//     '3': 'key3',
//     '4': 'key4',
//     '5': 'key5',
//     '6': 'key6',
//     '7': 'key7',
//     '8': 'key8',
//     '9': 'key9',
//     '/': 'operatorDivision',
//     '*': 'operatorMultiplier',
//     '-': 'operatorMinus',
//     '+': 'operatorPlus',
//     '=': 'equal',
//     'Enter': 'equal',
//     'Backspace': 'backspace',
//     'c': 'cleanDisplay',
//     'Escape': 'cleanCalc',
//     ',': 'decimal'
// }
// const keyboardMaping = (eventAction) => {
//     const keymap = eventAction.key;
//     const allowedkey = () => Object.keys(keyboardMap).indexOf(keymap) !== -1;
//     if (allowedkey()) {
//         document.getElementById(keyboardMap[keymap]).click();
//     }
// }
// document.addEventListener('keydown', keyboardMaping);
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

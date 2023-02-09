'use strict';

const display = document.getElementById('displayResult');
const numeros = document.querySelectorAll('[id*=key]');
const operators = document.querySelectorAll('[id*=operator]');

let newNumber = true;
let operator;
let lastNumber;

const pendingOperator = () => operator !== undefined;

const calculate = () => {
    if (pendingOperator()) {
        const currentNumber = parseFloat(display.textContent.replace(',', '.'));
        newNumber = true;
        switch (operator) {
            case '+':
                updateDisplay(lastNumber + currentNumber);
                break;
            case '-':
                updateDisplay(lastNumber - currentNumber);
                break;
            case 'X':
                updateDisplay(lastNumber * currentNumber);
                break;
            case '/':
                updateDisplay(lastNumber / currentNumber);
                break;
            case '%':
                updateDisplay(lastNumber % currentNumber);
                break;
        }
    }
}

const updateDisplay = (displayText) => {
    if (newNumber) {
        display.textContent = displayText.toLocaleString('BR');
        newNumber = false;
    } else {
        display.textContent += displayText.toLocaleString('BR');
    }
}

const insertNumber = (eventAction) => updateDisplay(eventAction.target.textContent);
numeros.forEach(numero => numero.addEventListener('click', insertNumber));

const selectOperator = (eventAction) => {
    if (!newNumber) {
        calculate();
        newNumber = true;
        operator = eventAction.target.textContent;
        lastNumber = parseFloat(display.textContent.replace(',', '.'));
    }
}
operators.forEach(numeros => numeros.addEventListener('click', selectOperator));

const showResult = () => {
    calculate();
    operator = undefined;
}
document.getElementById('equal').addEventListener('click', showResult);

const cleanDisplay = () => {
    display.textContent = '';
}
document.getElementById('cleanDisplay').addEventListener('click', cleanDisplay);

const cleanCalc = () => {
    cleanDisplay();
    operator = undefined;
    newNumber = true;
    lastNumber = undefined;
}
document.getElementById('cleanCalc').addEventListener('click', cleanCalc);

const removeLastNumber = () => {
    display.textContent = display.textContent.slice(0, -1);
}
document.getElementById('backspace').addEventListener('click', removeLastNumber);

const changeSignal = () => {
    newNumber = true;
    updateDisplay(display.textContent * -1);
}
document.getElementById('changeSignal').addEventListener('click', changeSignal);

const existDecimal = () => display.textContent.indexOf(',') !== -1;
const insertDecimal = () => {
    if (!existDecimal()) {
        if (display.textContent.length > 0) {
            updateDisplay(',');
        } else {
            updateDisplay('0,');
            console.log(existDecimal);
        }
    }
}
document.getElementById('decimal').addEventListener('click', insertDecimal);


const keyboardMap = {
    '0': 'key0',
    '1': 'key1',
    '2': 'key2',
    '3': 'key3',
    '4': 'key4',
    '5': 'key5',
    '6': 'key6',
    '7': 'key7',
    '8': 'key8',
    '9': 'key9',
    '/': 'operatorDivision',
    '*': 'operatorMultiplier',
    '-': 'operatorMinus',
    '+': 'operatorPlus',
    '=': 'equal',
    'Enter': 'equal',
    'Backspace': 'backspace',
    'c': 'cleanDisplay',
    'Escape': 'cleanCalc',
    ',': 'decimal'
}
const keyboardMaping = (eventAction) => {
    const keymap = eventAction.key;

    const allowedkey = () => Object.keys(keyboardMap).indexOf(keymap) !== -1;
    if (allowedkey()) {
        document.getElementById(keyboardMap[keymap]).click();
    }
}
document.addEventListener('keydown', keyboardMaping);
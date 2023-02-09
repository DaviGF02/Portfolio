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
        const currentNumber = parseFloat(display.textContent);
        let newNumber = true;
        if (operator == "+") {
            console.log(lastNumber);
            console.log(currentNumber);
            updateDisplay(lastNumber + currentNumber);
        }
    } else {
        
    }
}

const updateDisplay = (displayText) => {
    if (newNumber) {
        display.textContent = displayText;
        newNumber = false;
    } else {
        display.textContent += displayText;
    }
}

const insertNumber = (eventAction) => updateDisplay(eventAction.target.textContent);
numeros.forEach(numero => numero.addEventListener('click', insertNumber));

const selectOperator = (eventAction) => {
    if (!lastNumber) {
        calculate();
        newNumber = true;
        operator = eventAction.target.textContent;
        lastNumber = parseFloat(display.textContent);
        console.log(operator);
    } else {
        
    }
}
operators.forEach(numeros => numeros.addEventListener('click', selectOperator));
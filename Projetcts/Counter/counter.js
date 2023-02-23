'use strict'

let count = 0;

const counter = document.querySelector('#count');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn) {
    btn.addEventListener('click', function (e) {
        const buttonsClass = e.currentTarget.classList;
        if (buttonsClass.contains("decrease")) {
            count--;
        }
        else if(buttonsClass.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            counter.style.color = '#3A8600';
        }
        if (count < 0) {
            counter.style.color = '#CE181E';
        }
        if (count === 0) {
            counter.style.color = '#E5E5E5';
        }
        counter.innerHTML = count;
    })
})
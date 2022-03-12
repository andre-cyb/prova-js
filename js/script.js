'use.strict';

let numero = null;
let valore = 1;
let selectedRange = 10;
let button;


let select = document.getElementById('select-box').addEventListener('change', function () {
    valore = this.value;

    if (valore === '1') {
        selectedRange = 10;
    }
    if (valore === '2') {
        selectedRange = 50;
    }
    if (valore === '3') {
        selectedRange = 100;
    }

    console.log(valore);
    console.log('da 0 a ' + selectedRange);
});

console.log(selectedRange);

button = document.getElementById('btn').addEventListener('click', function () {

    let number = getRandomInt(selectedRange);
    console.log(number);
    numero = number;
    /* console.log('numero salvato: ' + numero); */

    const showNum = document.getElementById('show-number')
    showNum.innerHTML = numero;
});



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}




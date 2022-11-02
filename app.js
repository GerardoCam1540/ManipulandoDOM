const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const p = document.querySelector('#resultado');

h1.innerHTML = 'Calculadora endogena';


const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
   let resultado = ( Number(input1.value) + Number(input2.value));
    p.innerText = `Resultado: ${resultado}`;
}

//Escribiendo HTML desde JS

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
h1,
p,
parrafito,
pid,
input,
});

h1.innerHTML = 'Pedo';

//Crear
/*
const img = document.createElement('img');
img.setAttribute('src', 'https://www.collinsdictionary.com/images/full/tree_267376982.jpg');

console.log(img);

pid.append(img);
*/

//Escuchando eventos desde JS

const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector('#result');

//'onclick' y 'onchange' (ver documento HTML) permiten escuchar eventos

function btnOnclick() {
  const sumaInputs =  parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = "El resultado es " + sumaInputs;
}

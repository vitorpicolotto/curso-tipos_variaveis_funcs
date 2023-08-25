const primeiroNumero = 5;
const segundoNumero = 10;

console.log(primeiroNumero === segundoNumero);

//funciona também para arrays

const textoUm = "Alura";
const textoDois = "alura";

console.log(textoDois === textoUm);
// identifica os textos tanto com letra maiuscula e minuscula 


//outros dois tipos são o null e o undefined

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}
let input2;

console.log(input); // null
console.log(input2); // undefined
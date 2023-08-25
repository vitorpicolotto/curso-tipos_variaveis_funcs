// boolean

const usuarioLogado = true
const contaPaga = false

// truthy ou falsy - não são booleanos mas se comportam como tal

// 0 => false, 1 => true

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

//null - representa nada, ausência de valor

let minhaVar;
let varNull = null;

console.log(minhaVar)
console.log(varNull)

let numero= 3;
let texto = "Alura";

console.log (typeof numero) //number
console.log (typeof texto) //string
console.log (typeof minhaVar) //undefined
console.log (typeof varNull) //objeto


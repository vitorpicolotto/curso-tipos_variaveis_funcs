//tipo de dado trabalhando com booleanos - conversão

//conversão implícita - podemos converter um dado em outro

const numero = 456;
const numeroString = "456";

//console.log(numero === numeroString);

//conversão explícita

// Number () - quando quer transformar uma string em um número
// String () - quando quer transformar um número em uma string

console.log(numero + Number(numeroString)); //ao invés de concatenar, vai fazer a conta

//ou const numeroString = Number("456") e console.log(numero +numeroString)
//se a const fosse numeroString = "456a", por exemplo, ia retornar NaN

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

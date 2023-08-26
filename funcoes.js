//let x = "";
//console.log(x);
//x = "oi";


//1) declara a função
//function imprimeTexto(texto){
//    console.log(texto)
//}

//2) executa a função (1 ou mais vezes)

//imprimeTexto(soma());
//imprimeTexto("outro texto");

//function soma(){
//    return 2 + 2;
//}

//console.log(soma());



// PARAMETROS DE FUNÇÃO - servem para a função receber informações para ser executada//

//function soma(num1, num2){
//    return num1 + num2;
//}

//console.log(soma(2, 2))
//console.log(soma(245, 20))
//console.log(soma(-500, 60))

//ordem os parâmetros

//function nomeIdade(nome, idade){
//    return `meu nome é ${nome} e minha idade é ${idade}`;
//}

//console.log(nomeIdade(28, "Vitor"));
//console.log(nomeIdade("Vitor", 28));

//function multiplica(numero1, numero2){
 //   return numero1 * numero2;
//}

//console.log(multiplica(soma(4,5), soma(3,3)))


// EXPRESSÃO DE FUNÇÃO

//const soma = function(num1, num2){
  //  return num1 + num2
//} //função anonima, sem nome

//console.log(soma(1,1))

//console.log(apresentar());

//function apresentar(){
//    return "olá";
//}

//console.log(soma(1,1))
//const soma = function(num1, num2){
//    return num1 + num2
//}



//ARROW FUNCTION

function apresentar(nome){
   return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;


const somaNumerosPequenos = (num1, num2) => {
    if (num1 >10 || num2 >10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

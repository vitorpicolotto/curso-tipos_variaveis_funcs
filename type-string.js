const texto1 = "Olá, mundo";
const texto2 = 'Olá, mundo';
//o JS reconhece esses dois formatos, com aspas duplas ou simples

const senha = "senhaSuperSegura456!"
const stringDeNumeros = "34567";

const citacao = "Meu nome é "
const meuNome = "Renato Giordani Botteon"
console.log(citacao);

//template string ou template litoral

//concatenação

console.log(citacao + meuNome);

//se usássemos console.log(cidade===input), seria falso, pois o JS diferencia minúsculas de maiúsculas.
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


//para saber a quantidade de caracteres em uma string usamos a propriedade length
const minhaSenha = "minhaSenha123"
console.log(minhaSenha.length) // 13 caracteres


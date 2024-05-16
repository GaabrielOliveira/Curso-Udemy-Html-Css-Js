// 1 -  Variaveis

/*Let = Pode alterar o valor!
Const = Não pode alterar o valor!*/

let nome = "Gabriel";
console.log(nome);

nome = "Gabriel Oliveira"
console.log(nome);

const idade = 19;
console.log(idade);


// 2 - Mais sobre variaveis

let a = 10,
    b = 20,
    c = 30; 

console.log(a, b, c);

const nomecompleto = "Gabriel Oliveira"

const nomeCompleto = "João da Silva"

console.log(nomecompleto);
console.log(nomeCompleto);

// Pode-se usar _ e $ para a criação de variaveis
let _teste = "ok"
let $teste = "ok"

console.log(_teste, $teste);

// let 2teste = "errado"
// let @teste = "errado"

// 3 - Função Prompt
const age = prompt("Digite a sua idade:")

console.log(`Você tem ${age} anos.`);
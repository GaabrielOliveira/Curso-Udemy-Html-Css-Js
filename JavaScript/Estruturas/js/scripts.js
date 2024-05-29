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

// 4 - Função Alert
alert("Testando")

const z = 10
alert(`O número é ${z}`)

// 5 - Função Math
console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(6.8));

// 6 - Console
console.log("teste!");

console.error("erro!");

console.warn("Aviso!");

// Estruturas de Controle
// 7 - If
const m = 10;

if(m > 5) {
    console.log("M é maior que 5!");
}

const user = "João"

if(user === "João") {
    console.log("Olá João!");
}
if(user === "Maria") {
    console.log("Olá Maria!");
}

// 8 - Else
const loggedIn = false
if(loggedIn) {
    console.log("Está autenticado!");
}else{
    console.log("Não está autenticado!");
}

const q = 10
const w = 15

if(q > 5 && w > 20) {
    console.log("Números mais altos!");
}else{
    console.log("Números não são mais altos!");
}

// 9 - Else if
if(1 > 2){
    console.log("teste!");
} else if(2 > 3){
    console.log("Teste 2!");
} else if (5 > 1){
    console.log("Agora sim!");
}

const userName = "Gabriel"
const userAge = 19

if(userName === "José") {
    console.log("Bem vindo José!");
} else if(userName === "Gabriel" && userAge === 31){
    console.log("Olá Gabriel, você tem 19 anos!");
} else {
    console.log("Nenhuma condição aceita!");
}

// Estrururas de Repetição
// 10 - While
let p = 0

while(p < 5){
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

let x = 10
// Loop infinito
// while( x > 5) {
//     console.log(`Imprimindo ${x}`);
// }

// 11 - do While
o = 10

do {
    console.log(`Valor de ${o}`);
    o--
}while(o > 1);

// 12 - For
for(let t = 0; t < 10; t++){
    console.log("Repetindo algo...");
}

let r = 10

for(r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo: ${r}`);
}

// 13 - break
for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);
    if(g === 12) {
        console.log("O g é igual a 12!");
        break
    }
}

for(let a = 15; a > 7; a--) {
    console.log(`O valor de a é: ${a}`);
    if(a === 8) {
        console.log("O a é igual a 8!");
        break
    }
}

// 14 - Continue
for(let s = 0; s < 10; s = s + 1) {
    if(s % 2 === 0) {
        console.log(("Número par!"));
        continue
    }

    console.log(s);
}

// 15 - Switch
const job = "Médico"

switch(job) {
    case "Advogado":
        console.log("Você é um advogado!");
        break
    case "Médico":
        console.log("Você é um médico!");
        break
    case "Engenheiro":
        console.log("Você é um engenheiro!");
        break
    default:
        console.log("Profissão não encontrada!");
}
// Maneira "errada" (sem Break)
const l = 100

switch(l) {
    case 200:
        console.log("L é 200");
    case 100:
        console.log("L é 100");
    case 10:
        console.log("L é 10");
    default:
        console.log("L não foi encontrado!");
}
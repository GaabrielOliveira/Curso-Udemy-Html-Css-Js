// 1 - Criando uma função
function minhaFuncao() {
    console.log("Testando");
}
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variavel");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Alguma coisa");

funcaoComParametro("Outra função")

// 2 - Return
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));
// ---------------------- Exemplos meus-------------------------
const e = 2
const f = 5
const g = 3
const h = 4

function multiplication(n1, n2, n3, n4) {
    return n1 * n2 * n3 * n4
}

const valor = multiplication(e, f ,g ,h);
console.log(valor);
// -------------------------------------------------------------

// 3 - Escopo do função
let y = 10

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é: ${y}`);
}
testandoEscopo();

console.log(`Y fora da função é: ${y}`);

testandoEscopo();

// 4 - Escopo aninhado
let m = 10
function escopoAninhado() {
    let m = 20

    if (true){
        let m = 30

        if(true) {
            let m = 40

            console.log(m);
        }

        console.log(m);
    }

    console.log(m);
}

escopoAninhado();

console.log(m);

// 5 - Arrow function
const testeArrow = () => {
    console.log("Esta é uma arrow function!");
}

testeArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0){
        console.log("Par");
        return
    }

    console.log("Impar");
}

parOuImpar(5);

parOuImpar(10);
// ------------------ Meu exemplo -------------------
const primoOuNao = (n) => {
    if(n % 3 != 0){
        console.log("É primo");
    } else{
        console.log("Não é primo");
    }
}

primoOuNao(10); /*É primo*/

primoOuNao(18); /*Não é primo*/
// -------------------------------------------------

// 6 - Mais sobre Arrow functions
const raizQauadrada = (x) => {
    return x * x
}
console.log(raizQauadrada(4));


const raizQauadrada2 = (x) => x * x 

console.log(raizQauadrada2(5));

console.log(raizQauadrada2(13));
// ------------------ Meu exemplo -------------------
const raizCubica = (x) => {
    return x * x * x
}
console.log(raizCubica(5));

const raizCubica2 = (x) => x * x * x 
console.log(raizCubica2(6));


// 7 - Parametros opicionais
const multiplication2 = function(m, n) {
    if(n === undefined) {
        return m * 2
    }else {
        return m * n
    }
}

console.log(multiplication2(5));

console.log(multiplication2(4, 3));

const greeting = (name) => {
    if(!name) {
        console.log("Olá");
        return
    }else {
        console.log(`Olá ${name}`);
    }
}
greeting()
greeting("Gabriel")

// 8 - Default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}
console.log(customGreeting("Gabriel"));
console.log(customGreeting("Davi", "Bom dia!"));

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++){
        console.log(text);
    } 
}
repeatText("Testando");
repeatText("Agora repete 5 vezes", 5);

// 9 - Closure
function someFunction() {
    let txt = "Alguma coisa"

    function display(){
        console.log(txt);
    }

    display()
}

someFunction();

// 10 - Mais sobre Closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    }
}

const c1 = multiplicationClosure(5)

const c2 = multiplicationClosure(10)

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

// 11 - Recursão
const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar!");
    }else {
        const x = n -m

        console.log(x);

        untilTen(x, m)
    }
}
untilTen(100, 7)


function factorial(x) {
    if( x === 0) {
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

const num = 6
const result = factorial(num)

console.log(`O fatorial do número ${num} é ${result}.`);
//--------------------- Meu exemplo ---------------------------
function fatorial2(y) {
    if( y === 0) {
        return 1
    }else {
        return y * fatorial2(y - 1)
    }
}

const num2 = 5
const newResult = fatorial2( num2)

console.log(`O fatorial do número ${num2} é ${newResult}.`);

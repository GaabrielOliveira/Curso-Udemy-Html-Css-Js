// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -128);

// 2 - Operações aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(10 * 3);
console.log(30 / 3);
console.log(2 ** 2);

console.log(5 + 4 * 2)


// 3 - Números Especiais
console.log(typeof Infinity);
// Infinitos; Console  = Number

console.log(typeof -Infinity);
// Infinitos negativos; Console  = Number 

console.log(12 * "texto");
// NaN (Not a Number); Console = NaN

console.log(typeof NaN);
// NaN; Console  = Number


// 4 - String
console.log("Um texto");
console.log('Mais um texto (Com aspas simples)');
console.log(`Outro texto (Com crase!)`);

console.log(typeof "Um texto");
console.log(typeof 'Mais um texto (Com aspas simples)');
console.log(typeof `Outro texto (Com crase!)`);

// 5 - Caracteres especiais
console.log("Testando a \n quebra de linha");
console.log("Espaçamento \t de tab");


// 6 - Concatenação
console.log("Oi," + "tudo" + " bem?");
console.log(`Testando` + ` com` + ` crase!`);


// 7 - Interpolação (Template strings)
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);


// 8 - Booleans
console.log(true);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof `play`);


// 9 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);


// 10 - Valor idêntico
console.log(9 == "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");

// 11 - Operadores lógicos
// && = AND ; || = OR; ! = NOT
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Gabriel" === 1);

// OR
console.log(5 > 2 || "Gabriel" === 1);

console.log(5 < 2 || 5 > 100);

// NOT
console.log(!true);

console.log(!5 > 2);


// 12 - Empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);
console.log(null == undefined);
/* Null e undefined são iguais mas não identicos,
pois os tipos são diferentes*/

console.log(null == false);

console.log(undefined == false);


// 13 - Conversão de tipos
console.log(5 * null);  /* 0 */

console.log("teste" * "opa"); /* NaN */

console.log("10" + 1); /* 101 */

console.log("10" - 1); /* 9 */

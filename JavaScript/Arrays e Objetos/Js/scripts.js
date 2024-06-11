// 1 - Arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista);
console.log(typeof lista);

const items = ["Gabriel", true, 2, 4.14, [12, 14,]]
console.log(items);

// 2 - Mais sobre arrays
const arr = ["a" , "b", "c", "d", "e"]

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[28]);

// 3 - Propriedades
const numbers = [3, 5, 7]

console.log(numbers.length);

const myName = "Gabriel";
console.log(myName.length);

// 4 - Métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers);

const text = "Algum texto"

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5 - Objetos 
const person = {
    name: "Gabriel",
    age: 19,
    job: "Estudate"
}

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 - Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}
console.log(car);

car.doors = 4 /*Adicionando*/
console.log(car);

delete car.km; /*Deletando*/
console.log(car);

// 7 - Mais sobre objetos
// copiando propriedades de outro objeto
const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj);
console.log(obj2);

// 8 - Conhecendo melhor Objeto
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));
console.log(Object.entries(car));

// 9 - Mutability
const a = {
    name: "Gabriel"
}

const b = a
console.log(a);
console.log(b);

console.log(a === b);
a.age = 31

console.log(a);
console.log(b);

delete b.age
console.log(a);
console.log(b);

// 10 - Loop em Arrays
const users = ["Gabriel", "João", "Pedro", "Miguel"]

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}
/*A quantidade de itens ajuda a terminar o loop;
acessar o indice pelo contador também ajuda!*/

// 11 - Push e Pop
const array = ["a", "b", "c", "d"]
// Adicionar item no fim da lista
array.push("e")
console.log(array);
console.log(array.length);

// apagar item no fim da lista
array.pop()
console.log(array);

// devolver item no fim da lista
const itemRemovido = array.pop()
console.log(itemRemovido);
console.log(array);

// adicionar mais de um item no fim da lista
array.push("z","x","y")
console.log(array);

// 12 - Shift e Unshift
// remove item do inicio da lista
const letters = ["a", "b", "c"]
const letter = letters.shift()
console.log(letters);
console.log(letter);

// adiciona items no inicio da lista, pode colocar um ou varios itens
letters.unshift("p", "q", "r")
letters.unshift("z")
console.log(letters);

// 13 - IndexOf e LastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]
console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));
console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// 14 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2, 4);
console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4+1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20)
console.log(subArray3); 

const subArray4 = testeSlice.slice(2)
console.log(subArray4);

// 15 - Foreach
const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
})

const posts = [
    { tittle: "Primeiro post", category: "PHP"},
    { tittle: "Segundo post", category: "JavaScript"},
    { tittle: "Terceiro post", category: "Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.tittle}, da categoria ${post.category}`);
})

// 16 - Includes
const brands = ["BMW", "VW" ,"Fiat"]
console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));

if(brands.includes("BMW")) {
    console.log("Há carros da marca BMW!");
}

// 17 - Reverse
// Modifica o Array original!
const reverseTeste = [1, 2, 3 ,4 ,5]

reverseTeste.reverse()

console.log(reverseTeste);

// 18 - Métodos da String: Trim
const trimTeste = "  testando\n  "

console.log(trimTeste);
console.log(trimTeste.trim());

console.log(trimTeste.length);
console.log(trimTeste.trim().length);

// 19 - padStart
const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0")
console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0")
console.log(testePadEnd);

// 20 - Split
// Divide uma string em um array
const frase = "O rato roeu a roupa do rei de Roma"

const  arrayDaFrase = frase.split(" ")

console.log(arrayDaFrase);

// 21 - Join
// Une um array em uma string

const fraseDenovo = arrayDaFrase.join(" ")
console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor", "etc..."]

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra);

// 22 - Repeat
const palavra = "Testando "
console.log(palavra.repeat(5));

// 23 - Rest operator
const somaInfinita = (...args) => {

    let total = 0

    for(let i = 0; i < args.length; i++){
        total += args[i];
    }

    return total;
}

console.log(somaInfinita(1 , 2, 3));
console.log(somaInfinita(1 , 2, 3, 4, 5, 12, 14, 23, 22, 25));

// 24 - for of
const somaInfinita2 = (...args) => {
    let total = 0

    for(num of args){
        total += num
    }

    return total;
}

console.log(somaInfinita2(1 ,2, 3, 12412));

// 25 - Destructuring em Objetos
const userDetails = {
    firstName: "Gabriel",
    lastName: "Freitas",
    job: "Namerda"
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job);

// renomear variaveis
const {firstName: primeiroNome } = userDetails;
console.log(firstName);

// 26 - Destructuring em Arrays
const myList = ["Avião", "Submarino", "Carro", "Trator"]

const[veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON
const myJSon = '{"name": "Gabriel, "age": "19", "skills": ["Nada"]}'
console.log(myJSon);
console.log(typeof myJSon);

// 28 - Convertendo JSON
const myObject2 = JSON.parse(myJSon);

console.log(myObject2);

console.log(myObject2.name);

console.log(typeof myObject2);

myObject2.isOpenToWork = true;

console.log(myObject2);

const myNewJson = JSON.stringify(myObject2)
console.log(myNewJson);
console.log(typeof myNewJson);
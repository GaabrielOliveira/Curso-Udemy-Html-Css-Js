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
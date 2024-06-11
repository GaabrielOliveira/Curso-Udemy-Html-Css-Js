// 1 - Métodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au");
    }
};

console.log(animal.nome);

animal.latir();

// 2 - Mais sobre métodos
const pessoa = {
    nome: "Gabriel",

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome
    }
}

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Lucas")

console.log(pessoa.getNome());

// 3 -  Prototype
const text = "asd"

console.log(Object.getPrototypeOf(text));

const bool = true
console.log(Object.getPrototypeOf(bool));

const arr = []
console.log(arr.length);
console.log(Object.getPrototypeOf(arr));

// 4 - Mais sobre Prototype
const myObject = {
    a: "b",
}

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject)
console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - Classes básicas
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemão"
console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const caneCorso = Object.create(cachorro)
caneCorso.raca = "Cane Corso"
console.log(caneCorso);

// 6 - Classes baseadas em funções construtoras
function  criarCachorro(nome, raça) {
    const cachorro = Object.create({});

    cachorro.nome = nome
    cachorro.raça = raça

    return cachorro;
}

const toddy = criarCachorro("Toddy", "Vira lata");
console.log(toddy);

const Julieta = criarCachorro("Julieta", "Pequines")
console.log(Julieta);
console.log(Object.getPrototypeOf(Julieta));

// 7 - Classes baseadas em funções construtoras 2
function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const Poodle = new Cachorro("Mtilda" , "Poodle")
console.log(Poodle);

// 8 - Classes de função com métodos
Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuu!");
}

console.log(Cachorro.prototype);
Poodle.uivar()

// 9 - Classes ES
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}

const Woody = new CachorroClasse("Woody", "Labrador")
console.log(Woody);
console.log(Object.getPrototypeOf(Woody));

// 10 - Mais sobre Classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }
    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}
const scania = new Caminhao(6, "Vermelha")
console.log(scania);
scania.descreverCaminhao()

const c2 = new Caminhao(4, "Preta")
console.log(c2);

Caminhao.prototype.motor = 4.0

const c3 = new Caminhao(6, "Azul")
console.log(c3.motor);

// 11 - Substituindo Propriedades
class Humano{
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const gabriel = new Humano("Gabriel", 19)
console.log(gabriel);

Humano.prototype.idade = "Não definida"
console.log(gabriel.idade);

console.log(Humano.prototype.idade);

// 12 - Symbols em classes
class Aviao {
    constructor(marca, turbina) {
        this.marca = marca
        this.turbina = turbina
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2

Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 10)
console.log(boeing);

console.log(boeing[asas]);
console.log(boeing[pilotos]);

// 13 - Getters e Setters
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() {
        return`Você está lendo ${this.titulo}`
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre anime")

console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Atuais, mais antigos, Old"

console.log(myPost);

// 14 - Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "Shark")
console.log(shark);
console.log(shark.patas);

// 15 - InstanceOf
console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new Post("a", "b") instanceof Lobo);
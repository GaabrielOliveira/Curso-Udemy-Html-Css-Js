// 1 - Movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - Selecionando elementos por tag
const listItens = document.getElementsByTagName("li")

console.log(listItens);

// 3 - Selecionando elementos por Id
const title = document.getElementById("title")
console.log(title);

// 4 - Selecionando elementos por Classe
const products = document.getElementsByClassName("product")
console.log(products);

// 5 - Selecionando elementos por Css
const productQuery = document.querySelectorAll(".product")
console.log(productQuery);

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer);

// 6 - Alterando o HTML
/*
InsertBefore: Inserir um elemento antes do outro
AppendChild: Inserir um elemento dentro do outro
ReplaceChild: Trocar um elemento pelo outro
*/
// 6.1 - InsertBefore
const p = document.createElement("p")

const header = title.parentElement

header.insertBefore(p, title);

// 6.2 - AppendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// 6.3 - ReplaceChild
const h2 = document.createElement("h2")

h2.textContent = "Meu novo titulo!"

header.replaceChild(h2, title)

// 7 - createTextNode
const myText = document.createTextNode("Agora vamos colocar mias um titulo!")

 console.log(myText);

 const h3 = document.createElement("h3")

 h3.appendChild(myText)

 console.log(h3);

 mainContainer.appendChild(h3)

//  8 - Trabalhando com Atributos
/*
Para utilizar os atributos = getAttribute
Para alterar os atributos = setAttribute
*/
const firstLink = navLinks.querySelector("a")
console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com")

console.log(firstLink.getAttribute("href"));
firstLink.setAttribute("target", "_blank")

// 9 - altura e largura
const footer = document.querySelector("footer")
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientHeight);
console.log(footer.clientWidth);

// 10 - Posição do elemento
const product1 = products[0]
console.log(product1.getBoundingClientRect());

// 11 - Css com Js
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "15px"

// 12 - Alterando estilos de varios elementos
for(const li of listItens) {
    li.style.backgroundColor = "red"
}
// 1 - Adicionando eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function(){
    console.log("Clicou aqui!");
});

// 2 - Removendo eventos
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn")
thirdBtn.addEventListener("click", () => {
    console.log("Evento removido!");
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 3 - Argumento do evento
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

// 4 - Propagação
const containerBtn = document.querySelector("#btn-container")
const btnInsedeContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
})
btnInsedeContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2");
})

// 5 - Removendo evento padrão
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault()

    console.log("Não alterou a página!");
})

// 6 - Eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
})
document.addEventListener("keydown", (e) => {
    console.log(`Precionou a tecla ${e.key}`);
})

// 7 - Eventos de mouse
const mouseEvent = document.querySelector("#mouse")

mouseEvent.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
})

mouseEvent.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
})

mouseEvent.addEventListener("dblclick", () => {
    console.log("Clique duplo");
})

// 8 - Movinto do Mouse
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo X ${e.x}`);
    // console.log(`No eixo Y ${e.y}`);
})

// 9 - Eventos por scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200) {
        console.log("Passamos de 200px");
    }
})

// 10 - Evento de foco
const input = document.querySelector("#my-input")
input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
})

input.addEventListener("blur", (e) => {
    console.log("Saiu do input");
})

// 11 - Eventos de Load
window.addEventListener("laod", () => {
    console.log("A página carregou!");
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
    e.returnValue = ""
})

// 12 - Debounce
const debounce = (f, delay) => {
    let timeout

    return(...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando o evento a cada 400ms");
}, 400)
)

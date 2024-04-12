const imagens = document.querySelector(".imagens")
const botao = document.querySelector(".botao")

botao.addEventListener("click", mudarDeCor)

function mudarDeCor(){
    imagens.style.background = "red" 
    imagens.style.color = "black" 
}


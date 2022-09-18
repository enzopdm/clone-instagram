// Criação variável
let imagem = document.getElementById("troca-imagem")

// Função
function trocaImagem() {

  // If else para troca de opacidadee
  if (imagem.style.opacity == 0) {
    imagem.style.opacity = 1
  }
  else {
    imagem.style.opacity = 0
  }

}

// Determinando intervalo de troca de imagem
setInterval(function () {
  trocaImagem()
}, 4000)
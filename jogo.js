//Altura e largura do ambiente do jogo
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

// Definir o nível de dificuldade do game
var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}

// Marcar a área de jogo
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

// Tempo do jogo
var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
        // Parar a contagem do tempo
		clearInterval(cronometro)
		clearInterval(criaMosca)

        // Mostar pagina de vitória
		window.location.href = 'vitoria.html'
	} else {
        // Mudar o tempo np HTML
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)


function posicaoRandomica() {


	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html'
		} else {
            // Atualizar o ícone de vida
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            // Selecionar o próximo ícone
			vidas++
		}
	}
    //Criando aleatóriamente valores para criar as moscas
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

    // Tratamento de valore menor que 0, i.e. fora da área visível
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
    // Adicionar a imagem da mosca
	mosquito.src = 'imagens/mosquito.png'
    // Redimensionar a imagem
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	// Posicionar a nova imagem no eixo x
    mosquito.style.left = posicaoX + 'px'
    // Posicionar a nova imagem no eixo y
	mosquito.style.top = posicaoY + 'px'
    // Posição Absoliuta
	mosquito.style.position = 'absolute'
    // Adição de uma ID
	mosquito.id = 'mosquito'
    // Clique sobre o elemento
	mosquito.onclick = function() {
		this.remove()
	}
    // Inclusão do elemento criado dentro do body
	document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
        // Classes de mosquitos (0, 1 ou 2)
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {
    // Mudar lado da imagem da mosca
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}



let todasNoticias = []

 
document.querySelector("#tituloNoticias").style = "display: none"


const cadastrarNoticia = function(){
    if(noticia.value == "") return alert('Digite uma notícia')
    todasNoticias.push(noticia.value)
    document.querySelector("#qtdNoticias").innerHTML = todasNoticias.length
    document.querySelector("#tituloNoticias").style = "display: block"
    noticia.value = ""
    document.querySelector("#noticia").focus()
}

const mostrarNoticias = function(valor){
    if(valor != true) {
        if(todasNoticias.length == 0) return alert('Você não possui notícias cadastradas')
    }
    document.querySelector("#tituloNoticias").style = "display: none"
    document.querySelector("#mostrarNoticias").innerHTML = ``
    todasNoticias.forEach(function(texto, numero){
        if(texto != "") {
            
            document.querySelector("#mostrarNoticias").innerHTML += `
            <article class="message is-info is-medium"><div class="message-header"><h1>Notícia ${numero+1}</h1><span onclick="deletarUma(${numero+1})" class = "fechamento" id="fechar${numero+1}">x</span></div><div class="message-body">${texto}</div></article>`
        }
    })
}

const deletarNoticias = function(){
    if(todasNoticias.length == 0) return alert('Não há notícias para deletar!')
    document.querySelector("#tituloNoticias").style = "display: none"
    document.querySelector("#mostrarNoticias").innerHTML = ``
     while(todasNoticias.length > 0){
         todasNoticias.splice(todasNoticias.lenght, 1)
    }
}

const deletarUma = function(msg){
    todasNoticias.splice(msg-1, 1);
    mostrarNoticias(true)
}


btnCadastrarNoticia.addEventListener('click', cadastrarNoticia)

btnMostrar.addEventListener('click', mostrarNoticias)

btnDeletar.addEventListener('click', deletarNoticias)

btnRecarregar.addEventListener('click', function(){
    location.reload();
})

btnListarNav.addEventListener('click', function(){
    mostrarNoticias()
})

btnDeletarNav.addEventListener('click', function(){
    deletarNoticias()
})



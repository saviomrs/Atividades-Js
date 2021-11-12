
btnCalcular.addEventListener("click", repeticao)
function repeticao() {
    resultado = ''
    for (let i = 1; i <= 20; i++) {
        resultado += i+'<br>'
    }
    numero.innerHTML = resultado 
}
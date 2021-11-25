var erros = [];
var sorteado = Math.floor(Math.random()*100) + 1;

const CHANCES = 6

function apostarNumero(){
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);

    if (numero <= 0 || numero > 100 || isNaN(numero)){
        alert("Digite um número válido");
        inNumero.focus();
        return;
    }

    var outDica = document.getElementById("outDica");
    var outErros = document.getElementById("outErros");
    var outChances = document.getElementById("outChances");

    if (numero == sorteado){
        alert("( ͡❛ ͜ʖ ͡❛)✌ Você Acertou!!! ")

        btApostar.className = true;
        btJogar.className = "exibe";
        outDica.textContent = "Número sorteado: " + sorteado;
    }else {
        if (erros.indexOf(numero) >=0){
            alert("Você já apostou este número " + numero + ".Digite outro");
        }else {
            erros.push(numero);
            var numErros = erros.length;
            var numChances = CHANCES - numErros;

            outErros.textContent = numErros + " ("+ erros.join(",") + ")";
            outChances.textContent = numChances;

            if (numChances ==0){
                alert("Você não possue mais tentativas");
                btApostar.disable = true;
                btJogar.className = "exibe";
                outDica.textContent = "Fim de jogo! Número Sorteado: " + sorteado;
            }else {
                var dica = numero < sorteado ? "maior" : "menor";
                outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
            }
        }
    }
    inNumero.value = "";
    inNumero.focus();
}

var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", apostarNumero);
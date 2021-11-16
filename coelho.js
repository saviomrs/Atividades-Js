const inputCoelhos = document.getElementById('inputCoelhos');
const inputAno = document.getElementById('inputAno');
const btnCoelhos = document.getElementById('btnCoelhos');
const outCoelhos = document.getElementById('outCoelhos');



function mostarPrevisao() {
    
    let numeroCoelhos = Number(inputCoelhos.value);
    let numeroDeAnos = Number(inputAno.value);

    let total = numeroCoelhos;
    let quantidade = '';

    if (numeroCoelhos < 3 || numeroDeAnos == 0 || isNaN(numeroCoelhos) || isNaN(numeroDeAnos)) {
        alert('Preencha os campos corretamente');
        inputCoelhos.value = '';
        inputAno.value = '';
        inputCoelhos.focus();
        return;
    }

    for (let index = 1; index <= numeroDeAnos; index++) {
        quantidade += `${index}º Ano: ${total} Coelhos.\n`;
        total *= 7;
        
    }

    outCoelhos.textContent = quantidade;

}

btnCoelhos.addEventListener('click', mostarPrevisao);

const inputFruta = document.getElementById('inputFerramenta');
const inputNumero = document.getElementById('inputNumero');
const btnFruta = document.getElementById('btnFerramenta');
const outFruta = document.getElementById('outFerramenta');


function mostrarFerramenta() {
    
    let ferramenta = inputFerramenta.value;
    let numero = Number(inputNumero.value);
    let ferramentaRepitida = '';
    let ultimaFerramenta = '';

    if (ferramenta == '' || numero == 0 || isNaN(numero)) {
        alert('Preencha os campos corretamente...');
        inputFerramenta.focus();
        inputFruta.value = '';
        inputNumero.value = '';
        outFerramenta.textContent = '';
        return;
    }


    for (let index = 2; index <= numero; index++) {
        ferramentaRepitida += `${ferramenta}||`;
    }

    
    ultimaFerramenta = `${ferramenta}`;

    outFerramenta.textContent = `${ferramentaRepitida}${ultimaFerramenta}`;
}

btnFruta.addEventListener('click', mostrarFerramenta);
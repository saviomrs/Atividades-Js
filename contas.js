const inputDescricao = document.getElementById('inputDescricao');
const inputValorAPagar = document.getElementById('inputValorAPagar');
const btnPagar = document.getElementById('btnPagar');
const outContas = document.getElementById('outContas');
const outTotal = document.getElementById('outTotal');


let numeroDeContas = 0;
let valorTotal = 0;


let quantidade = '';

function registrarContas() {
    
    let descricao = inputDescricao.value;
    let valorAPagar = Number(inputValorAPagar.value);

   
    if (descricao == '' || valorAPagar == 0 || isNaN(valorAPagar)) {
        alert('Informe os dados corretamente...');
        inputDescricao.value = '';
        inputValorAPagar.value = '';
        inputDescricao.focus();
        return;
    }

    
    numeroDeContas++;
    valorTotal += valorAPagar;

  
    quantidade += `${descricao} - R$: ${(valorAPagar).toFixed(2)}\n`;
    
    outContas.textContent = `${quantidade}_____________________`;
    outTotal.textContent = `${numeroDeContas} Conta(s) - Total R$: ${(valorTotal).toFixed(2)}`;


    inputDescricao.value = '';
    inputValorAPagar.value = '';
    inputDescricao.focus();
}

btnPagar.addEventListener('click', registrarContas);

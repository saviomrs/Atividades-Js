btnCalcular.addEventListener('click', function () { 
    
    Altura = altura.value
    sexoFeminino

    
    if(sexoFeminino.checked){
       fatorPeso = 21
    } else {
       fatorPeso = 22
    }

    peso = fatorPeso * Math.pow(Altura, 2).toFixed(2)

    
    Peso = document.getElementById('pesoIdeal')
    Peso.innerHTML = `
       <p>Seu peso ideal é ${peso} Kg.</p>`
})


   

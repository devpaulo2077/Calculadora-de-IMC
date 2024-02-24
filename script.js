document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('calc-form');
    const nomeInput = document.getElementById('nome');
    const alturaInput = document.getElementById('altura');
    const pesoInput = document.getElementById('peso')
    const nomeError = document.getElementById('nome-error');
    const alturaError = document.getElementById('altura-error');
    const alturaError2 = document.getElementById('altura-error2');
    const pesoError = document.getElementById('peso-error');
    

    form.addEventListener('submit', function(evento){
        evento.preventDefault();

        if(!nomeInput.value){
            nomeError.style.display = 'block';
            return;
        } else {
            nomeError.style.display = 'none';
        };

        if(!alturaInput.value){
            alturaError.style.display = 'block';
            return;
        } else {
            alturaError.style.display = 'none';
        };
        if(!pesoInput.value) {
            pesoError.style.display = 'block';
            return
        } else {
            pesoError.style.display = 'none';
        };


        if(alturaInput.value >= 100){
            alturaError2.style.display = 'block'
            return
        } else {
            alturaError2.style.display = 'none'
        }

        const nome = nomeInput.value
        const altura = parseFloat(document.getElementById('altura').value)
        const peso = parseFloat(document.getElementById('peso').value)

        const imc = peso / (altura * altura)
        const resultado = document.getElementById('resultado')

        let categoria;

        if (imc < 18.5){
            categoria = 'Baixo peso'
            resultado.style.backgroundColor = '#FFF00'
        } else if (imc < 25){
            categoria = 'Peso adequado'
            resultado.style.backgroundColor = '#00FF00'
        } else if (imc < 30){
            categoria = 'Sobrepeso'
            resultado.style.backgroundColor = '#FFA500'
        } else {
            categoria = 'Obesidade'
            resultado.style.backgroundColor = '#FF0000'
        }

        resultado.innerHTML = `<p>${nome} seu IMC é ${imc.toFixed(2)}</p><p>Sua categoria é ${categoria}</p>`

        document.getElementById('categoria').value = categoria;

        let dados = new FormData(form)
        for([chave, valor] of dados.entries()){
            console.log(chave + ' : ' + valor)
        }
    })
})
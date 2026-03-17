function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultadoDiv = document.getElementById('resultado');

    if (peso !== '' && altura !== '') {
        // formula
        const imc = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';

        // valores do slides sandro
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else if (imc < 34.9) {
            classificacao = 'Obesidade grau I';
        } else if (imc < 39.9) {
            classificacao = 'Obesidade grau II';
        } else {
            classificacao = 'Obesidade grau III';
        }

        resultadoDiv.innerHTML = `Seu IMC é ${imc} <br> (${classificacao})`;
        resultadoDiv.style.color = "#000";
        
    } else {
        resultadoDiv.innerHTML = "Por favor, preencha todos os campos.";
        resultadoDiv.style.color = "red";
    }
}
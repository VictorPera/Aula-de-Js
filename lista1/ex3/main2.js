function conversao(){
    let grausCelsius;
    let grausFahrenheit = 150;

    grausCelsius = (grausFahrenheit - 32) * (5/9);
    return grausCelsius;
}

// Obtendo referências para o botão e o parágrafo
const calcularGraus = document.getElementById('calcularGraus');
const resultadoParagrafoGraus = document.getElementById('resultadoParagrafoGraus');

// Adicionando um ouvinte de evento ao botão
calcularGraus.addEventListener('click', function() {
    // Chama a função e obtém o resultado
    const resultado = conversao();

    // Exibe o resultado no parágrafo
    resultadoParagrafoGraus.textContent = 'A temperatura é: ' + resultado;
});
function media(){
    let x = 10;
    let y = 7;
    let media;
    media = (x + y) / 2;
    return media;
}

// Obtendo referências para o botão e o parágrafo
const calcularButton = document.getElementById('calcularButton');
const resultadoParagrafo = document.getElementById('resultadoParagrafo');

// Adicionando um ouvinte de evento ao botão
calcularButton.addEventListener('click', function() {
    // Chama a função e obtém o resultado
    const resultado = media();

    // Exibe o resultado no parágrafo
    resultadoParagrafo.textContent = 'A média é: ' + resultado;

    //Exibe um alerta
    alert(media());
});
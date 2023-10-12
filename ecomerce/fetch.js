function carregarPagina(pagina) {
    fetch(pagina)
        .then(response => response.text())
        .then(data => {
            document.getElementById('conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar página:', error));
}
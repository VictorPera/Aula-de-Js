function carregarPagina(pagina) {
    fetch(pagina)
        .then(response => response.text())
        .then(data => {
            document.getElementById('conteudo').innerHTML = data;
        })
    .catch(error => console.error('Erro ao carregar página:', error));
}

/*
Esta função é responsável por carregar o conteúdo de uma página HTML externa e exibi-lo dinamicamente no elemento com o ID "conteudo" da página principal. 

function carregarPagina(pagina) { ... }: Aqui, declaramos uma função chamada carregarPagina que aceita um parâmetro chamado pagina. Este parâmetro é uma string que representa o nome do arquivo HTML que queremos carregar dinamicamente.

fetch(pagina): Usamos o método fetch para fazer uma solicitação HTTP GET à página especificada pelo parâmetro pagina. A função fetch retorna uma promessa (Promise) que representa a resposta da solicitação HTTP.

.then(response => response.text()): Usamos o método .then para encadear uma série de operações que serão executadas quando a resposta da solicitação estiver disponível. No primeiro .then, convertemos a resposta em texto usando response.text(). Isso transforma o conteúdo da página em uma string de texto.

.then(data => { ... }): No segundo .then, recebemos o conteúdo da página (agora como texto) como o parâmetro data. Dentro desta função, selecionamos o elemento HTML com o ID "conteudo" usando document.getElementById('conteudo') e, em seguida, definimos o conteúdo desse elemento para ser igual à string data. Isso substituirá o conteúdo anterior do elemento "conteudo" pelo conteúdo da página carregada.

.catch(error => console.error('Erro ao carregar página:', error));: O .catch captura quaisquer erros que possam ocorrer durante o processo de busca ou carregamento da página e os exibe no console do navegador usando console.error. Isso ajuda na depuração, caso ocorram problemas.
*/
const catalogo = [
	{
		id: '1',
		nome: 'Box Senhor dos Anéis + O Hobbit',
		preco: 165,
		imagem: 'produto-1.png',
		adolescente: false,
	},
	{
		id: '2',
		nome: 'Box Harry Potter completa',
		preco: 365,
		imagem: 'produto-2.png',
		adolescente: false,
	},
	{
		id: '3',
		nome: 'Box Jogos Vorazes completa',
		preco: 99.99,
		imagem: 'produto-3.png',
		adolescente: false,
	},
	{
		id: '4',
		nome: 'Box Trono de Vidro completa',
		preco: 199.99,
		imagem: 'produto-4.png',
		adolescente: false,
	},
	{
		id: '5',
		nome: 'Box As Crônicas de Gelo e Fogo',
		preco: 550,
		imagem: 'produto-5.png',
		adolescente: false,
	},
	{
		id: '6',
		nome: 'Box Diário De Um Banana - 10 Volumes',
		preco: 288.5,
		imagem: 'produto-6.png',
		adolescente: true,
	},
	{
		id: '7',
		nome: 'Box Arsène Lupin Editora Principis - 7 volumes',
		preco: 84.99,
		imagem: 'produto-7.png',
		adolescente: false,
	},
	{
		id: '8',
		nome: 'Box The Witcher',
		preco: 350,
		imagem: 'produto-8.png',
		adolescente: false,
	},
];

//Função para salvar dados na memória do navegador
function salvarLocalStorage(chave, informacao){
    localStorage.setItem(chave, JSON.stringify(informacao));
}

//Função para ler dados da memória do navegador
function lerLocalStorage(chave){
    return JSON.parse(localStorage.getItem(chave));
}

//Função para apagar dados na memória do navegador
function apagarDolocalStorage(chave){
	localStorage.removeItem(chave);
}

//Função responsável por gerar os cartões de produtos no carrinho
function desenharProdutoCarrinhoSimples(idProduto, idContainerHTML, quantidadeProduto) {
	const produto = catalogo.find((p) => p.id === idProduto);
	const containerProdutosCarrinho = document.getElementById(idContainerHTML);

	const elementoArticle = document.createElement('article');

	const articleClasses = ['flex', 'bg-stone-200', 'rounded-lg', 'relative', 'mb-2', 'w-96'];

	for (const articleClass of articleClasses) {elementoArticle.classList.add(articleClass);}

	const cartaoProdutoCarrinho = `
        <img src="./img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="w-24 h-24 rounded-lg p-2">

        <div class="py-2 flex flex-col justify-between">
            <p class="text-slate-900 text-sm p-1">${produto.nome}</p>
            <p class="text-green-800 text-lg">R$ ${produto.preco}</p>
        </div>

        <div class="flex items-end text-slate-950 absolute bottom-0 right-2 text-lg">
            <p id="quantidade-${produto.id}">${quantidadeProduto}</p>
        </div>
	`;

	elementoArticle.innerHTML = cartaoProdutoCarrinho;

	containerProdutosCarrinho.appendChild(elementoArticle);
}

const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

//Função que atualiza os preços do carrinho com base na quantidade dos produtos
function atualizarPrecoCarrinho() {
	const precoCarrinho = document.getElementById('preco-total');
	let precoTotalCarrinho = 0;

	for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
		precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
	}
	precoCarrinho.innerText = `Total: R$ ${precoTotalCarrinho}`;
}

//Função que desenhas os cards de produtos na section de produtos do checkout, cards esses similares aos do carrinho
function desenharProdutosCheckout(){
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

    for(const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoCarrinhoSimples(idProduto, 'container-produtos-checkout', idsProdutoCarrinhoComQuantidade[idProduto]);
    }
}

//Função que finaliza a compra e gera um histórico de compras
function finalizarCompra(event){
    event.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
        return;
    }

    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade
    }
    const historicoDePedidos = lerLocalStorage('historico') ?? {};
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];

    salvarLocalStorage('historico', historicoDePedidosAtualizado);
    apagarDolocalStorage('carrinho');

    window.location.href = window.location.origin + '/pedidos.html';
}

desenharProdutosCheckout();
atualizarPrecoCarrinho();

document.addEventListener('submit', (event) => finalizarCompra(event));
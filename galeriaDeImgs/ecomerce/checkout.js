//Função que atualiza os preços do carrinho com base na quantidade dos produtos
function atualizarPrecoCarrinho(){
	const precoCarrinho = document.getElementById('preco-total');
	let precoTotalCarrinho = 0;

	for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
		precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
	}
	precoCarrinho.innerText = `Total: R$ ${precoTotalCarrinho}`;
}

// //Função responsável por gerar os cartões de produtos no carrinho
// function desenharProdutoCarrinhoSimples(idProduto, idContainerHTML, quantidadeProduto) {

// }

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


//Função responsável por mostrar ou não os produtos do carrinho
function renderizarprodutosCarrinho() {
	const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
	containerProdutosCarrinho.innerHTML = '';

	for (const idProduto in idsProdutoCarrinhoComQuantidade) {
		desenharProdutoNoCarrinho(idProduto);
	}
}

//constante que verifiaca se tem produtos no carrinho
const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

//Função para fechar o carrinho
function fecharCarrinho() {
	document.getElementById('carrinho').classList.remove('right-0');
	document.getElementById('carrinho').classList.add('right-[-370px]');
}

//Função para abrir o carrinho
function abrirCarrinho() {
	document.getElementById('carrinho').classList.remove('right-[-370px]');
	document.getElementById('carrinho').classList.add('right-0');
}

//Função que inicializa o carrinho
function inicializarCarrinho() {
	const botaoFecharCarrinho = document.getElementById('fechar-carrinho');
	const botaoAbrirCarrinho = document.getElementById('abrir-carrinho');
	const botaoIrParaCheckout = document.getElementById('finalizar-compra');

	botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
	botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
	botaoIrParaCheckout.addEventListener('click', irParaCheckout);
}

//Função que remove itens do carrinho
function removerDoCarrinho(idProduto) {
	delete idsProdutoCarrinhoComQuantidade[idProduto];
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
	atualizarPrecoCarrinho();
	renderizarprodutosCarrinho();
}

//Função que adiciona itens pelo carrinho
function incrementarQuantidadeProduto(idProduto) {
	idsProdutoCarrinhoComQuantidade[idProduto]++;
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
	atualizarPrecoCarrinho();
	atualizarInformacaoQunatidade(idProduto);
}

//Função que remove itens pelo carrinho
function decrementarQuantidadeProduto(idProduto) {
	if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
		removerDoCarrinho(idProduto);
		return;
	}
	idsProdutoCarrinhoComQuantidade[idProduto]--;
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
	atualizarPrecoCarrinho();
	atualizarInformacaoQunatidade(idProduto);
}

//Função que atualiza a informação de quantidade de produtos
function atualizarInformacaoQunatidade(idProduto) {
	document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

//Função resposável por criar os produtos do carrinho
function desenharProdutoNoCarrinho(idProduto) {
	const produto = catalogo.find((p) => p.id === idProduto);
	const containerProdutosCarrinho = document.getElementById('produtos-carrinho');

	const elementoArticle = document.createElement('article');

	const articleClasses = ['flex', 'bg-slate-100', 'rounded-lg', 'relative'];

	for (const articleClass of articleClasses) {
		elementoArticle.classList.add(articleClass);
	}

	const cartaoProdutoCarrinho = `
        <button id="remover-item-${produto.id}">
            <i class="fa-solid fa-circle-xmark text-slate-500 absolute right-[10px] top-[40px] hover:text-slate-900 duration-300"></i>
        </button>

        <img src="./img/${produto.imagem}" alt="Carrinho: ${
		produto.nome
	}" class="w-24 h-24 rounded-lg p-2">

        <div class="py-2 flex flex-col justify-between">
            <p class="text-slate-900 text-sm">${produto.nome}</p>
            <p class="text-green-800 text-lg">R$ ${produto.preco}</p>
        </div>

        <div class="flex items-end text-slate-950 absolute bottom-0 right-5 gap-4 text-lg">
            <button id="decrementar-produto-${produto.id}">-</button>
            <p id="quantidade-${produto.id}">${
		idsProdutoCarrinhoComQuantidade[produto.id]
	}</p>
            <button id="incrementar-produto-${produto.id}">+</button>
        </div>`;

	elementoArticle.innerHTML = cartaoProdutoCarrinho;

	containerProdutosCarrinho.appendChild(elementoArticle);

	document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click', () => decrementarQuantidadeProduto(produto.id));

	document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click', () => incrementarQuantidadeProduto(produto.id));

	document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removerDoCarrinho(produto.id));
}

//Função responsável por adicionar produtos do homepage ao carrinho através de um botão
function adicionarAoCarrinho(idProduto) {
	if (idProduto in idsProdutoCarrinhoComQuantidade) {
		incrementarQuantidadeProduto(idProduto);
		return;
	}
	idsProdutoCarrinhoComQuantidade[idProduto] = 1;
	salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
	desenharProdutoNoCarrinho(idProduto);
	atualizarPrecoCarrinho();
}

//Função que atualiza os preços do carrinho com base na quantidade dos produtos
function atualizarPrecoCarrinho() {
	const precoCarrinho = document.getElementById('preco-total');
	let precoTotalCarrinho = 0;

	for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
		precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
	}
	precoCarrinho.innerText = `Total: R$ ${precoTotalCarrinho}`;
}

//Função que leva para a página de checkout após apertar o botão de "finalizar compra"
function irParaCheckout(){
	if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
		return;
	}
	window.location.href = window.location.origin + '/checkout.html';
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

const catalogoProdutos = document.getElementById("container-produto");

//Função que exibe todos os produtos no filtro "Todos"
function exibirTodos(){
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));

    for(const produto of produtosEscondidos){
        produto.classList.remove('hidden');
    }
}

//Função que esconde os livros "Adultos"
function esconderAdultos(){
    exibirTodos();
    const produtosAdultos = Array.from(catalogoProdutos.getElementsByClassName('adulto'));

    for(const produto of produtosAdultos){
        produto.classList.add('hidden');
    }
}

//Função que esconde os livros "Adolescentes"
function esconderAdolescentes(){
    exibirTodos();
    const produtosAdolescentes = Array.from(catalogoProdutos.getElementsByClassName('adolescente'));

    for(const produto of produtosAdolescentes){
        produto.classList.add('hidden');
    }
}

//Função que inicializa os filtros
export function inicializarFiltros(){
    document.getElementById('exibir-todos').addEventListener('click', exibirTodos);
    document.getElementById('exibir-adolescentes').addEventListener('click', esconderAdultos);
    document.getElementById('exibir-adultos').addEventListener('click', esconderAdolescentes);
}
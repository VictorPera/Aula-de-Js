// Array de objetos contendo o cadastro de cada box de livro do ecommerce
const catalogoBox = [
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

const catalogoDiversos = [
	{
		id: '1',
		nome: 'Box The Witcher',
		preco: 350,
		imagem: 'produto-8.png',
		adolescente: false,
	},
	{
		id: '2',
		nome: 'Box The Witcher',
		preco: 350,
		imagem: 'produto-8.png',
		adolescente: false,
	},
	{
		id: '3',
		nome: 'Box The Witcher',
		preco: 350,
		imagem: 'produto-8.png',
		adolescente: false,
	},
	{
		id: '4',
		nome: 'Box The Witcher',
		preco: 350,
		imagem: 'produto-8.png',
		adolescente: false,
	},
	{
		id: '5',
		nome: 'Box The Witcher',
		preco: 350,
		imagem: 'produto-8.png',
		adolescente: false,
	},
	{
		id: '6',
		nome: 'Box The Witcher',
		preco: 350,
		imagem: 'produto-8.png',
		adolescente: false,
	},
	{
		id: '7',
		nome: 'Box The Witcher',
		preco: 350,
		imagem: 'produto-8.png',
		adolescente: false,
	},
	{
		id: '8',
		nome: 'Box The Witcher',
		preco: 350,
		imagem: 'produto-8.png',
		adolescente: false,
	},
]

const catalogoProdutos = document.getElementById("container-produto-livro");

//constante que verifiaca se tem produtos no carrinho
const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

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

//Função responsável por adicionar produtos do homepage ao carrinho atraavés de um botão
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

//Função que constroi o card de produtos livros e adiciona o evento de click ao botao de adicionar ao carrinho
function renderizarCatalogoLivros(){
    for(const produtoCatalogo of catalogoBox){

        const cartaoProduto = `
        <div id="card-produto-${produtoCatalogo.id}" class="flex flex-col w-[350px] m-2 p-2 justify-between shadow-xl shadow-slate-400 rounded-lg produto group ${produtoCatalogo.adolescente ? 'adolescente' : 'adulto'}">
            <img 
            src="./img/${produtoCatalogo.imagem}"
            alt="${produtoCatalogo.nome}"
            class="drop-shadow-md group-hover:scale-110 duration-300 my-3 w-[290px] h-[290px] self-center" 
            >
            <h2 class="text-sm">${produtoCatalogo.nome}</h2>
            <p class="text-lg">R&#x24; ${produtoCatalogo.preco}</p>
            <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-800 duration-200 rounded-lg active:bg-slate-600"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;
        document.getElementById("container-produto-livro").innerHTML += cartaoProduto;
    };

    for(const produtoCatalogo of catalogoBox){
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id));
    }
}

//Função que constroi o card de produtos diversos e adiciona o evento de click ao botao de adicionar ao carrinho
function renderizarCatalogoDiversos(){
    for(const produtoCatalogo of catalogoDiversos){

        const cartaoProduto = `
        <div id="card-produto-${produtoCatalogo.id}" class="flex flex-col w-[350px] m-2 p-2 justify-between shadow-xl shadow-slate-400 rounded-lg produto group ${produtoCatalogo.adolescente ? 'adolescente' : 'adulto'}">
            <img 
            src="./img/${produtoCatalogo.imagem}"
            alt="${produtoCatalogo.nome}"
            class="drop-shadow-md group-hover:scale-110 duration-300 my-3 w-[290px] h-[290px] self-center" 
            >
            <h2 class="text-sm">${produtoCatalogo.nome}</h2>
            <p class="text-lg">R&#x24; ${produtoCatalogo.preco}</p>
            <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-800 duration-200 rounded-lg active:bg-slate-600"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;
        document.getElementById("container-produto-diversos").innerHTML += cartaoProduto;
    };

    for(const produtoCatalogo of catalogoDiversos){
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id));
    }
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


//Função que leva para a página de checkout após apertar o botão de "finalizar compra"
function irParaCheckout(){
	if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
		return;
	}
	window.location.href = 'http://127.0.0.1:5500/ecomerce/checkout.html';
}

//Função que inicializa os filtros
function inicializarFiltros(){
    document.getElementById('exibir-todos').addEventListener('click', exibirTodos);
    document.getElementById('exibir-adolescentes').addEventListener('click', esconderAdultos);
    document.getElementById('exibir-adultos').addEventListener('click', esconderAdolescentes);
}

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

//Função responsável por mostrar ou não os produtos do carrinho
function renderizarProdutosCarrinho() {
	const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
	containerProdutosCarrinho.innerHTML = '';

	for (const idProduto in idsProdutoCarrinhoComQuantidade) {
		desenharProdutoNoCarrinho(idProduto);
	}
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

        <img src="./img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="w-24 h-24 rounded-lg p-2 imagem-carrinho">

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

//Função que remove itens do carrinho
function removerDoCarrinho(idProduto) {
	delete idsProdutoCarrinhoComQuantidade[idProduto];
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
	atualizarPrecoCarrinho();
	renderizarProdutosCarrinho();
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

//Função que atualiza os preços do carrinho com base na quantidade dos produtos
function atualizarPrecoCarrinho() {
	const precoCarrinho = document.getElementById('preco-total');
	let precoTotalCarrinho = 0;

	for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
		precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
	}
	precoCarrinho.innerText = `Total: R$ ${precoTotalCarrinho}`;
}

renderizarCatalogoLivros();
renderizarCatalogoDiversos();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho()
inicializarFiltros();

// Array de objetos contendo o cadastro de cada produto do ecommerce
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

//Função que constroi o card de produtos e adiciona o evento de click ao botao de adicionar ao carrinho
function renderizarCatalogo(){
    for(const produtoCatalogo of catalogo){

        const cartaoProduto = `
        <div id="card-produto-${produtoCatalogo.id}" class="flex flex-col w-80 m-2 p-2 justify-between shadow-xl shadow-slate-400 rounded-lg produto group ${produtoCatalogo.adolescente ? 'adolescente' : 'adulto'}">
            <img 
            src="./img/${produtoCatalogo.imagem}"
            alt="${produtoCatalogo.nome}"
            class="group-hover:scale-110 duration-300 my-3 w-[290px] self-center " 
            >
            <h2 class="text-sm">${produtoCatalogo.nome}</h2>
            <p class="text-lg">R&#x24; ${produtoCatalogo.preco}</p>
            <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-800 duration-200 rounded-lg active:bg-slate-600"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;
        document.getElementById("container-produto").innerHTML += cartaoProduto;
    };

    for(const produtoCatalogo of catalogo){
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

renderizarCatalogo();
inicializarFiltros();
inicializarCarrinho();
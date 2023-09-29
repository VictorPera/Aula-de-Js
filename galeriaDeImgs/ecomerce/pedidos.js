import { data } from "autoprefixer";
import { desenharProdutoCarrinhoSimples, lerLocalStorage } from "./src/utilidades";

//Função responsável por criar o histórico de compras
function criarPedidoHistorico(pedidoComData){
    const elementoPedido = `
        <p class='text-xl text-bold my-4'>
            ${new Date(pedidoComData.dataPedido).toLocaleDateString('pt-BR', {hour: '2-digit', minute: '2-digit'})}
        </p>
        <section id='container-pedidos-${pedidoComData.dataPedido}' class='bg-slate-300 p-3 rounded-md'></section>
    `;

    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += elementoPedido;

    for(const idProduto in pedidoComData.pedido){
        desenharProdutoCarrinhoSimples(idProduto, `container-pedidos-${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto]);
    }
}

//Função resposável por nos mostrar o histórico de compras
function rendereziarHistoricoPedidos(){
    const historico = lerLocalStorage('historico');
    for(const pedidoComData of historico){
        criarPedidoHistorico(pedidoComData);
    }
}

rendereziarHistoricoPedidos();
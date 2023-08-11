// function gerarNumeroAleatorio(){
//     let numero = document.getElementById('numero').value;
//     window.alert(Math.floor(Math.random() * numero) + 1);
// }

// function calcularQuadrado(){
//     let numero2 = document.getElementById('numero2').value;
//     window.alert(numero2 * numero2);
// }

let escolha;
let tagInicial;
let tagFinal;
let tipoDeLista;
let entradaValida = true;

switch(escolha){
    case '1':
        tagInicial = '<ol>';
        tagFinal = '</ol>';
        tipoDeLista = '<h1>Lista Numereda</h1>';
        break;
    case '2':
        tagInicial = '<ol style="list-style-type: upper-alpha">';
        tagFinal = '</ol>';
        tipoDeLista = '<h1>Lista Letrada</h1>';
        break;
    case '3':
        tagInicial = '<ol style="list-style-type: upper-roman">';
        tagFinal = '</ol>';
        tipoDeLista = '<h1>Lista Letrada Romana</h1>';
        break;
    default:
        entradaValida = false;
}

if(entradaValida == true){
    document.writeln(tipoDeLista + tagInicial);
    for(let i = 1; i <= 3; i++){
        document.writeln('<li>Item de lista ' + i + '</li>');
    }
    document.writeln(tagFinal);
}else{
    document.writeln('Escolha inválida: ' + escolha);
}
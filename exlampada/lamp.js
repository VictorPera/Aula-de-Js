function  ligaDesliga(){
    let lampada = document.getElementById("lampada");
    let interruptor = document.getElementById("btnPrincipal");

    if(lampada.src.match("/exlampada/img/lampadaApagada.jpeg")){
        lampada.src = "/exlampada/img/lampadaAcessa.jpeg";
        interruptor.innerText = 'Desligar';

    }else{
        lampada.src = "/exlampada/img/lampadaApagada.jpeg";
        interruptor.innerText = 'Ligar';

    }
}

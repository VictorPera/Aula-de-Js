function  ligaDesliga(){
    console.log("chamou")
    let lampada = document.getElementById("lampada");
    let interruptor = document.getElementById("interruptor_desligado")
    // let interruptor = document.getElementById("btnPrincipal");

    if(lampada.src.match("/exlampada/img/lampadaApagada.jpeg")){
        lampada.src = "/exlampada/img/lampadaAcessa.jpeg";
        // interruptor.innerText = 'Desligar';
        interruptor.src = "/exlampada/img/interruptor_desligado.jpeg";

    }else{
        lampada.src = "/exlampada/img/lampadaApagada.jpeg";
        // interruptor.innerText = 'Ligar';
        interruptor.src = "/exlampada/img/interruptor_ligado.jpeg";
    }
}

let interruptor = document.getElementById("interruptor_desligado");
console.log(interruptor)
interruptor.addEventListener("click", ligaDesliga);


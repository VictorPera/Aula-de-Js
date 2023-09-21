function  ligaDesliga(){
    console.log("chamou")
    let lampada = document.getElementById("lampada");
    let interruptor = document.getElementById("interruptor_desligado")
    // let interruptor = document.getElementById("btnPrincipal");

    if(lampada.src.match("./img/lampadaApagada.png")){
        lampada.src = "./img/lampadaAcessa.png";
        // interruptor.innerText = 'Desligar';
        interruptor.src = "./img/interruptor_desligado.jpeg";

    }else{
        lampada.src = "./img/lampadaApagada.png";
        // interruptor.innerText = 'Ligar';
        interruptor.src = "./img/interruptor_desligado.jpeg";
    }
}

let interruptor = document.getElementById("interruptor_desligado");
console.log(interruptor)
interruptor.addEventListener("click", () => ligaDesliga());


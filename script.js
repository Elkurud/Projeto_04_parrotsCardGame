
let contador = 0

function virarCarta(carta) {

    carta.classList.add('virada');
    contador++;

    if (contador == 2){
        setTimeout(desvirar, 1000);
        contador = 0
    }
}

function desvirar(){

    const cartas = document.querySelectorAll('.virada');
    
    for( let i = 0; i < cartas.length; i++){
        cartas[i].classList.remove('virada')
    }
}
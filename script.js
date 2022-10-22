
let contador = 0
const card = document.querySelector(".ex");

function distribuir(num){
    
    const deck = document.querySelector(".deck")
    deck.innerHTML += card.innerHTML
    console.log(deck);
}

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

/*https://codepen.io/dimayakovlev/pen/VmxOYM*/
function shuffle(elems) {
 
    allElems = (function(){
	let ret = [], l = elems.length;
	while (l--) { ret[ret.length] = elems[l]; }
	return ret;
    })();
 
    let shuffled = (function(){
        let l = allElems.length, ret = [];
        while (l--) {
            let random = Math.floor(Math.random() * allElems.length),
                randEl = allElems[random].cloneNode(true);
            allElems.splice(random, 1);
            ret[ret.length] = randEl;
        }
        return ret; 
    })(), l = elems.length;
 
    while (l--) {
        elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
        elems[l].parentNode.removeChild(elems[l]);
    }
 
}

let button = document.querySelector('button');
button.addEventListener('click', function() { shuffle( document.querySelectorAll('.deck > .card') ) }, false);
/*fim da funcao embaralhar*/

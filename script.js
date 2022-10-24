let numeroDeCartas = prompt("Com quantas cartas você vai jogar? (deve ser par e entre 4 e 14 cartas)")
let contador = 0;
const card = document.querySelector(".card");
let contador2 = 0;


while((numeroDeCartas % 2) !== 0 || numeroDeCartas < 3 || numeroDeCartas > 15){
    numeroDeCartas = prompt("(numero inserido não cumpre os requisitos!)");
}

if ((numeroDeCartas % 2) === 0 && numeroDeCartas >= 4 && numeroDeCartas <= 14){

    distribuir();
}

function distribuir(){

    const deck = document.querySelector(".deck")
    for (let i = 0; i <= (numeroDeCartas - 3); i++){
    deck.innerHTML += card.outerHTML;
    }

}

function desvirar(){

    const cartas = document.querySelectorAll('.virada');
    
    for( let i = 0; i < cartas.length; i++){
        cartas[i].classList.remove('virada')
    }
}

function virarCarta(carta) {

    carta.classList.add('virada');
    contador++;

    if (contador == 2){
        setTimeout(desvirar, 1000);
        contador = 0
    }
}

function certa(carta){
    
    carta.classList.add('carta1');
    contador2++;

    if (contador2 == 2){
        carta.classList.add('carta2');
        contador2 = 0;

        let carta1Img = document.querySelector('.carta1').getElementsByTagName('img');
        let carta2Img = document.querySelector('.carta2').getElementsByTagName('img');
        let carta1 = document.querySelector('.carta1');
        let carta2 = document.querySelector('.carta2');

        console.log(carta1);
        console.log(carta2);

        if(carta1Img[1].src == carta2Img[1].src){
            carta1.classList.add('.certa');
            carta2.classList.add('.certa');
        }

        const cartas1 = document.querySelectorAll('.carta1');
        
            for( let i = 0; i < cartas1.length; i++){
                cartas1[i].classList.remove('carta1')
        }

        const cartas2 = document.querySelectorAll('.carta2');
        
            for( let i = 0; i < cartas2.length; i++){
                cartas2[i].classList.remove('carta2')
        }
    }
}




let image = document.querySelectorAll(".imagem");

function colocarValorNasCartas(){

    

    for (let i = 0; i < image.length; i++){

        if(i == 0){
                image[i].src ="Archives/bobrossparrot.gif";
                image[image.length - 1].src ="Archives/bobrossparrot.gif";
                image[i].setAttribute('id','1');
                image[image.length - 1].setAttribute('id','1');
        }else if(i == 1){
                image[i].src ="Archives/explodyparrot.gif";
                image[image.length - 2].src ="Archives/explodyparrot.gif";
                image[i].setAttribute('id','2');
                image[image.length - 1].setAttribute('id','2');
        }else if(i == 2){
                image[i].src ="Archives/fiestaparrot.gif";
                image[image.length - 3].src ="Archives/fiestaparrot.gif";
                image[i].setAttribute('id','3');
                image[image.length - 1].setAttribute('id','3');
        }else if(i == 3){
                image[i].src ="Archives/metalparrot.gif";
                image[image.length - 4].src ="Archives/metalparrot.gif";
                image[i].setAttribute('id','4');
                image[image.length - 1].setAttribute('id','4');
        }else if(i == 4){
                image[i].src ="Archives/revertitparrot.gif";
                image[image.length - 5].src ="Archives/revertitparrot.gif";
                image[i].setAttribute('id','5');
                image[image.length - 1].setAttribute('id','5');
        }else if(i == 5){
                image[i].src ="Archives/tripletsparrot.gif";
                image[image.length - 6].src ="Archives/tripletsparrot.gif";
                image[i].setAttribute('id','6');
                image[image.length - 1].setAttribute('id','6');
        }else if(i == 6){
                image[i].src ="Archives/unicornparrot.gif";
                image[image.length - 7].src ="Archives/unicornparrot.gif";
                image[i].setAttribute('id','7');
                image[image.length - 1].setAttribute('id','7');
        }
           console.log(i); 
    }
}

/*https://codepen.io/dimayakovlev/pen/VmxOYM*/
function shuffle(elems) {
 
    allElems = (function(){
	let ret = [];
    let l = elems.length;
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

var button = document.querySelector('button');
button.addEventListener('click', function() { shuffle( document.querySelectorAll('.deck > .card') ) }, false);
/*fim da funcao embaralhar*/

/* 
2c: 2 treboles
2d: 2 diamantes
2h: 2 corazon
2s: 2 espada

*/
let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
//Esta funcion crea una baraja
const crearDeck = () =>{
    for (let i = 2; i <=10; i++) {
        for (const tipo of tipos) {
            deck.push(`${i}${tipo}`)
        }
    }
    for (const especial of especiales) {
        for (const tipo of tipos) {
            deck.push(especial+tipo)
        }
    }
    
    deck=_.shuffle(deck);
    return deck;
}

//console.log(crearDeck());

const pedirCarta= () => {
    let deck = crearDeck();
    if (deck.length ==0) {
        throw 'No hay cartas'; //Error en consola
    }
    let pedirCarta = deck.pop();
    return pedirCarta;
}

// console.log(pedirCarta()); 

const valorCarta = (carta) => {
    // const valor = carta[0];
    const valor = carta.substring(0,carta.length - 1);
    
    const puntos = isNaN(valor) ? //Si no es un numero
                    ( valor === 'A' ) ? 11 : 10 
                    : valor*1;// Lo tranformo a numero multiplicandole por 1
    /* let puntos  = 0;
    if(isNaN(valor)){//Si no es un numero
        puntos = ( valor === 'A' ) ? 11 : 10;
    }else{
        puntos=valor *1;// Lo tranformo a numero multiplicandole por 1
    } */
    return puntos;
}
console.log(valorCarta(pedirCarta()));

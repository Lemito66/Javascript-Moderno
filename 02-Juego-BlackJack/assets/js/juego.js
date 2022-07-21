/* 
2c: 2 treboles
2d: 2 diamantes
2h: 2 corazon
2s: 2 espada

*/
let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
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
console.log(crearDeck()); 

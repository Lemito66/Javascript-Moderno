/* 
2c: 2 treboles
2d: 2 diamantes
2h: 2 corazon
2s: 2 espada

*/
let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
let puntosJugador = 0,
  puntosComputadora = 0;
//Referencias del html
const btnPedirCarta = document.querySelector("#btnPedirCarta");
const divJugadorCartas = document.querySelector("#jugador-cartas");
const puntoHtml = document.querySelectorAll("small");

//Esta funcion crea una baraja
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (const tipo of tipos) {
      deck.push(`${i}${tipo}`);
    }
  }
  for (const especial of especiales) {
    for (const tipo of tipos) {
      deck.push(especial + tipo);
    }
  }
  deck = _.shuffle(deck); //Desordena la baraja
  return deck;
};

const pedirCarta = () => {
  let deck = crearDeck();
  if (deck.length == 0) {
    throw "No hay cartas"; //Error en consola
  }
  let pedirCarta = deck.pop(); //Sacar el ultimo elemento de la baraja
  return pedirCarta;
};

const valorCarta = (carta) => {
  // const valor = carta[0];
  const valor = carta.substring(0, carta.length - 1);

  const puntos = isNaN(valor) //Si no es un numero
    ? valor === "A"
      ? 11
      : 10
    : valor * 1; // Lo tranformo a numero multiplicandole por 1
  return puntos;
};

//Eventos
btnPedirCarta.addEventListener("click", () => {
  const carta = pedirCarta(); //pedimos la carta
  puntosJugador += valorCarta(carta); //sumamos los puntos
  puntoHtml[0].innerText = puntosJugador; //Hacemos que se muestre en pantalla los puntos

  // <img class="carta" src="assets/cartas/10S.png">
  const imagenCarta = document.createElement("img"); //Creamos un elemento de tipo imagen
  imagenCarta.src = `assets/cartas/${carta}.png`; //Ponemos la dirección de donde se encuentra las imagenes de la carta
  imagenCarta.classList.add("carta"); //Creamos los estilo
  divJugadorCartas.append(imagenCarta); // Añadimos los estilos

  if (puntosJugador > 21) {
    console.warn("Lo siento mucho, perdiste");
    btnPedirCarta.disabled = true; // Desactivamos el boton cuando el jugador llegue a más de 21 puntos
  } else if (puntosJugador === 21) {
    console.warn("21, genial!");
    btnPedirCarta.disabled = true; // Desactivamos el boton cuando el jugador llegue a 21
  }
});

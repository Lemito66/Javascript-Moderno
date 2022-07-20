/* Dias de la semana abrimos a las 11,
los fines de semana abrimos a las 9 */

// Entra a un sitio web, para consultar si esta abierto hoy
//0:domingo... 1:Lunes
const dia = 6;
const horaActual=10;

let horaApertura;
let mensaje;//Está abierto, Está cerrado, Hoy abrimos a las XX

//if (dia===0 || dia===6) 
/* if ([0,6].includes(dia))//Es mejor hacerlo así
{
    console.log('Fin de semana');
    horaApertura=9;
}else{
    console.log('Dia de semana');
    horaApertura = 11;
} */
//Ahora con operador ternario
horaApertura = ([0,6].includes(dia)) ? 9 : 11;//Como if pequeño, déspues del signo de interrogación es lo verdadero, despues de los ':' es lo que no se cumple

//Normal
/* if (horaActual >= horaApertura) {
    mensaje = 'Estamos abiertos';
}else{
    mensaje = `Estamos cerrados, atendemos a las: ${horaApertura}`;
} */

//Operador ternario
mensaje = (horaActual>=horaApertura) ? 'Estamos abiertos' : `Estamos cerrados, atendemos a las: ${horaApertura}`;
console.log({horaApertura,mensaje});
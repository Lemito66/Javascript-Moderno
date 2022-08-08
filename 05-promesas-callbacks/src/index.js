import {
    promesaLenta,
    promesaMedia,
    promesaRapida
} from "./js/promesas";

/* promesaLenta.then( console.log);
promesaMedia.then( console.log);
promesaRapida.then( console.log);
 */



Promise.race([promesaLenta, promesaMedia, promesaRapida]) //Promise.race pide como argumentos un arreglo de promesas o argumentos
    .then(mensaje => console.log(mensaje)) //El método then() retorna una Promesa. Recibe dos argumentos: funciones callback para los casos de éxito y fallo de Promise.
    .catch(console.warn);
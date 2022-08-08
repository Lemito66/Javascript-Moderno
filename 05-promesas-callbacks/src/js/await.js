import { buscarHeroe, buscarHeroeAsync } from "./promesas";


const heroresIds = ['capi','iron','spyder'];

export const obtenerHeroresArr = async() => { // Se debe poner el async sino el await no funciona

    return await Promise.all(heroresIds.map(buscarHeroe));  //Crea un nuevo arreglo de promesas


    /* const heroesArr = [];
    for (const id of heroresIds) {
        heroesArr.push(buscarHeroe(id));
    }
    return await Promise.all( heroesArr );// Es recomendable usar el await fuera del for */
}
// Esto en el index
/* import { obtenerHeroresArr } from "./js/await";

console.time('await')

obtenerHeroresArr().then(heroes => {
    console.table(heroes);
    console.timeEnd('await');
});
 */

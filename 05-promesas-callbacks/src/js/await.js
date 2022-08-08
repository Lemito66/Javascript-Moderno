import {
    buscarHeroe,
    buscarHeroeAsync
} from "./promesas";


const heroresIds = ['capi', 'iron', 'spyder'];

export const obtenerHeroresArr = async () => { // Se debe poner el async sino el await no funciona

    return await Promise.all(heroresIds.map(buscarHeroe)); //Crea un nuevo arreglo de promesas


    /* const heroesArr = [];
    for (const id of heroresIds) {
        heroesArr.push(buscarHeroe(id));
    }
    return await Promise.all( heroesArr );// Es recomendable usar el await fuera del for */
}
//Manejar lo errores con el await
export const obtenerHeroesAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (error) {
        console.log("Catch!!");
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }

}


// Esto en el index
/* import { obtenerHeroesAwait, obtenerHeroresArr } from "./js/await";

console.time('await')

obtenerHeroesAwait('capi2e')
    .then(heroes => {
    console.log(heroes);

    console.timeEnd('await');
}).catch(console.warn);
 */
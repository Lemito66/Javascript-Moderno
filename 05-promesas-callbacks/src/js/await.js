import {
    buscarHeroe,
    buscarHeroeAsync
} from "./promesas";


const heroresIds = ['capi', 'iron', 'spyder'];
const heroesPromesas = heroresIds.map(buscarHeroe); //Es lo mismo que lo de abajo
// const heroesPromesas = heroresIds.map(id => buscarHeroe(id));

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

export const heroesCiclo = async() => {
    console.time('HeroesCiclo');

    for await(const heroe of heroesPromesas) {
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclo');
    /* const heroes = await Promise.all(heroesPromesas);
    heroes.forEach(heroe => console.log(heroe)); */
}

export const heroeIfAwait = async(id) => {
    if  ( (await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('El mejor de todos');
    }else{
        console.log('Naa');
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
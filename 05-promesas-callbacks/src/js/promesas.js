const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantas inyecciones sin morir',
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero',
    },
    spyder: {
        nombre: 'Spyderman',
        poder: 'La mejor reaccion alergica a las picaduras de araña',
    },
}


export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    //vamos a retornar la promesa
    return new Promise((resolve, reject) => {

        if (heroe) {
            setTimeout(() => resolve(heroe), 1000);
            resolve(heroe);
        } else {
            reject(`No existe un héroe con el id ${ id }`);
        }
    });

}
//Forma Async, El async resumen todo lo que hace una promesa, por ejemplo en la función de arriba retornabamos una promesa, con async resumimos eso
export const buscarHeroeAsync = async (id) => { // El nombre de la función no tiene nada que ver con lo que hace la función
    const heroe = heroes[id];

    //vamos a retornar la promesa

    if (heroe) {
        return heroe;//Esto envez de resolve
    } else {
        throw `No existe un héroe con el id ${ id }`;// Esto envez de reject
    }


}


const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});
const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});
const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rápida'), 1000);
});

export {
    promesaRapida,
    promesaLenta,
    promesaMedia,
}
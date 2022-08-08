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
            resolve(heroe);
        } else {
            reject(`No existe un héroe con el id ${ id }`);
        }
    });

}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});
const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});
const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promesa Rápida'), 1000);
});

export {
    promesaRapida,
    promesaLenta,
    promesaMedia,
}
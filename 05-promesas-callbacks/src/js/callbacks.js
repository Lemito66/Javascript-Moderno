// Un callback no es más que una simple función
const heroes = {
    capi:{
        nombre: 'Capitán América',
        poder: 'Aguantas inyecciones sin morir',
    },
    iron:{
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero',
    },
    spyder:{
        nombre: 'Spyderman',
        poder: 'La mejor reaccion alergica a las picaduras de araña',
    },
}
// callback retorna...
export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id];
    if (heroe) {
        callback(null, heroe);
    }else {
        //Un error
        callback(`No existe un héroe con el id ${ id }`);
    }
    //callback( heroe )
}
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


export const buscarHeroe = ( id ) => {
    const heroe = heroes[id];

    //vamos a retornar la promesa
    return new Promise( (resolve, reject ) =>{

        if (heroe) {
            resolve( heroe );
        }else{
            reject(`No existe un héroe con el id ${ id }`);
        }
    });

}
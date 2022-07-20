/* function crearPersona(nombre,apellido){
    return{
        nombre,
        apellido,
    }
}
*/

//Funcion flecha
const crearPersona = (nombre,apellido) => ({nombre,apellido});
const persona=crearPersona('Emill','Logroño');
console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}
imprimeArgumentos('hola','pepe',25,85.5);

const imprimeArgumentos2 = (palabra,...args) =>{ //Solo permite un argumento y lo hace a todo un arreglo, pero si necesito uno lo ponemos al principio y lo saca aparte
    
    // console.log({palabra,args});
    return args;
    
}
imprimeArgumentos2('hola','pepe',25,85.5);
//{ palabra: 'hola', args: [ 'pepe', 25, 85.5 ] }

const {apellido: nuevoApellido}=crearPersona('Emill','Logroño');
console.log({nuevoApellido});

const emill = {
    nombre: 'Emill',
    apellido: 'Logroño',
    vivo: false,
    edad: 24,
    coordenadas: {
        lat: 34.034,
        lng: -118.70
    },
    ropa: ['Hoodies','Zapatillas'],
    'ultima-pelicula': 'Spiderman',// Si se necesita poner el signo menos se coloca en comillas

};
const imprimePropiedad = (nombrePersona)=>{
    console.log(nombrePersona.nombre);
    console.log(nombrePersona.apellido);
    console.log(nombrePersona.vivo);
    console.log(nombrePersona.edad);
    console.log(nombrePersona.ropa);
};
imprimePropiedad(emill);

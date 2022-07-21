//Objeto literal es lo mismo que en python son los diccionarios
//Esto hace referencia a un objeto
let persona = {
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
console.log(persona); // al momento de imprimir se lo visualiza de manera alfabetica
console.log('Nombre: ', persona.nombre);//Primera forma
console.log('Nombre: ', persona['nombre']);//Segunda Forma. Igual que python
console.log('Edad: ', persona['edad']);
console.log('Coordenadas de latitud: ', persona['coordenadas']['lat']);//Como obtener las coordenas

//Saber los numeros de ropa que tengo
console.log('Número de ropa: ',persona['ropa'].length);
//Saber mi ultima ropa
console.log('Su ultima ropa es: ',persona['ropa'][persona['ropa'].length-1]);//Una forma
console.log('Su ultima ropa es: ',persona.ropa[persona.ropa.length-1]);//Una forma

const x= 'vivo';
console.log('Vivo: ',persona[x]); //Se puede referenciar así en js

//Ultima pelicula
console.log('Ultima pelicula', persona['ultima-pelicula'])//Se puede hacer esto
//console.log('Ultima pelicula', persona.ultima-pelicula)//No se puede usar notacion punto cuando esta en el objeto con comillas, revisar linea 13

// ------------- Más detalles -------------- //
//Borrar Propiedad 
delete persona.edad;
console.log(persona);
persona.casado=false; // añadir la propiedad casado, esto solo se puede hacer porque la variable es let

//Poner posiciones
const entriesPares=Object.entries(persona);
console.log(entriesPares)

//Usar un bloqueo de las propiedades
Object.freeze(persona);

persona.dinero =1000; //Esto ya no se puede hacer, porque esta congelado y ya no se puede hacer asignasiones, pero si las puedo cambiar
persona.nombre = 'Jossue'
console.log(persona);

//Para saber las propiedad, lo transforma en un listado en forma de arreglo
const propiedad = Object.getOwnPropertyNames(persona);
const valores = Object.values(persona);
console.log({propiedad,valores});

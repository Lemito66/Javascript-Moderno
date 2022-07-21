let primerNumero = 10;
let segundoNumero = primerNumero;
primerNumero = 30;
console.log({primerNumero,segundoNumero});

let emill = {nombre: 'Emill'};
let ana = {...emill};//Rompemos la referencia
//Todos los objetos son pasados por referencia
//Todo es un objeto expectuando los primitivos
ana.nombre = 'Ana'
console.log({emill,ana});

const cambiaNombre = ({...persona}) =>{
    persona.nombre = 'Emilito';
    return persona;
};
let juan = {nombre: 'Juan'};
let emilito = cambiaNombre(juan)
console.log({juan,emilito});

//Arreglos 
const frutas = ['Manzana','Pera','Piña'];

console.time('spread');
const otraFrutas = [...frutas];//Se rompe la referencia poniendo en corchetes haciendo un nuevo arreglo y los tres puntos llamado spread
console.timeEnd('spread')

console.time('slice');//Esto es para medir el rendimiento
const otraFrutas2 = frutas.slice();//Otra forma
console.timeEnd('slice')

otraFrutas.push('Mango');
otraFrutas2.push('Mango');


console.table({frutas,otraFrutas,otraFrutas2});
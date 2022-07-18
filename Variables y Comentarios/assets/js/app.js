//alert("Hola desde App.js");
// Comentario una linea
/* Comentario varias lineas */
let a =10;
var b =10; //
const c =10; // este valor no va a poder cambiar

//Otra forma
let d=10,
    e=20,
    f=30;

//  c=20 Esto no se puede hacer
console.log('a',a)
console.info('b',a)
console.error('c',a)
console.warn(a)
//Un metodo no es más que una función que se encuentra en un objeto

console.log('a',a)
console.log('b',b)
console.log('c',c)
//A manera de objeto

console.log({a})
console.log({b})
console.log({c})

//Dar estilos css desde Javascript
console.log('%c Mi texto','color:salmon; font-weight:bold')

let h='Hola',
    i='Emill',
    j=4;

console.table({h,i,j});

let myfirstobj = {
    name: 'object',
    size: 2
}
console.log(myfirstobj)
console.log(h+i)

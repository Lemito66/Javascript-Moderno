//Tipos de datos primitivos
let nombre='Emill';
console.log(nombre);
nombre="Jossue";
console.log(nombre);

//Ver tipo de variable
console.log(typeof nombre); //string

//Booleanos
let esHombre=true;
console.log(typeof esHombre); // boolean

//Entero o flotantes son -> Numeros
edad=5;
edadDecimal=5.5
console.log(typeof edad); //number
console.log(typeof edadDecimal); //number

//Undefined 
//En javascript se acostumbra a escribir variables CamelCase
let superPoderDeSpiderman;
console.log(typeof superPoderDeSpiderman); // undefined

//Null
let vacio= null;
console.log(typeof vacio); // null

//Symbol
let symbolUno=Symbol('a');
let symbolDos=Symbol('b');

console.log(typeof symbolUno);//symbol
console.log(symbolUno === symbolDos); // Falso, el triple igual es para saber que son y iguales y el mismo tipo de dato

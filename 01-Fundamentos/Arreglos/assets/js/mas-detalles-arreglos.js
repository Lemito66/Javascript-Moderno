let juegos=['Zelda','Mario','Good Of War','Crash']
console.log('Longitud: ', juegos.length);

let primero=juegos[0];
let segundo=juegos[juegos.length-1]; // Saber la ultima posición
console.log(segundo);
juegos.forEach((elemento, infice, arr)=>{
    console.log({elemento,infice,arr});
});

let nuevaLongitud=juegos.push('Crash 2'); // Añadir elemento al final
console.log({nuevaLongitud,juegos});


nuevaLongitud=juegos.unshift('Crash3')//agrear al principio
console.log({nuevaLongitud,juegos});

let sacarElemento=juegos.pop()//Remover el ultimo elemento
console.log({sacarElemento,juegos});

let posicion=1;

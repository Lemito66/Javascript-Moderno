//Areglos
let arregloNombres=['Emill','Jorge'];
console.log(arregloNombres[1]);

//Otra forma 
const arreglo = new Array(10); // Esta no es la forma tradicional
console.log(arreglo)

//Otra forma 
const arregleOtraForma=[];

let videojuegos=['Mario3','God Of War', 'Trigger'];
console.log(videojuegos)
console.log(videojuegos[0]) //Imprimir primera posición

let arregloCosas=[
    true,
    123,
    'Emill',
    5+5,// Esto se considera buena practica al dejar la coma al final
    function(){}, // Tambien se pueden añadir funciones
    ()=>{},
    {a:1},
    ['X','Megaman','Zero','Dr.Light',['Dr. Willy','Woodman']],
];
console.log(arregloCosas);
console.log(arregloCosas[0]);
console.log(arregloCosas[7][3]);//Imprimir el Dr. Light
console.log(arregloCosas[7][4][1]);//Imprimir el Woodman
//Funciones
//Un metodo es una función que se encuentra dentro de un Objeto
function saludo(){
    console.log('Hello World');
}
//Funcion Anonima
const saludoDos= function(){
    console.log('Hello World');
}
function saludoConArgumento(nombre){
    console.log(arguments)//Muestra todos los argumentos que llego
    console.log('Hello: ' + nombre);
}
//Funcion tipo flecha


const saludarFlecha = ()=>{ //Los parentesis son opcionales, pero es una buena practica ponerlos
    console.log('Hola con Flecha');
}
const saludarFlechaDos = (nombre) =>{
    console.log('Hola con Flecha', nombre);
}
function sumar(a,b){
    return a+b;
}
//console.log(sumar(5,5));

const sumarDosNumeros = (a,b) => {
    return a+b;
};
//console.log(sumarDosNumeros(5,5));

const retornarUnaSolaCosa = (a,b) => a+b; // Esto solo para retornar una sola cosa
// console.log(retornarUnaSolaCosa(5,5));

function retornarAleatorio(){
    return Math.random()
}
//console.log(retornarAleatorio());

//En una función flecha, que no tenga {}
const retornarNumeroAleatorio = () => Math.random();
console.log(retornarNumeroAleatorio());

/* saludoConArgumento('Emill');
saludo()
saludoDos();
saludoConArgumento('Emill','Logroño',23);
saludarFlecha();
saludarFlechaDos('Emill'); */

/* function crearPersona(nombre,apellido){
    return{
        nombre,
        apellido,
    }
}
 */

//Funcion flecha
const crearPersona = (nombre,apellido) => ({nombre,apellido})
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
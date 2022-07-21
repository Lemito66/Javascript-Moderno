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


const sumar = (a,b)=> a+b;
const restar = (a,b) =>{
    return a-b;
};
console.log(sumar(5,5));

const tablaMultiplicar = (numero, hasta)=>{
    for (let i = 0; i <= hasta; i++) {
        let multiplicacion=numero*i
        let resultado=(numero , '*' , i , '=', multiplicacion);
        return resultado        
    }
};

tablaMultiplicar(7,10);

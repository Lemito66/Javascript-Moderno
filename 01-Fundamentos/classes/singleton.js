//Singleton es una instancia unica de mi clase 
class Singleton {
    //La linea 4 y 5 son opcionales
    static instancia; //Instancia inicializada de mi clase -> Undefined
    nombre = '';

    constructor(nombre = '') {
        //console.log(Singleton.instancia);

        if (!!Singleton.instancia) { //? Doble signo de admiración es lo opuesto que el primer signo de admiración
            return Singleton.instancia;
        }

        Singleton.instancia = this; //? EL this especifica a la instancia
        this.nombre = nombre;

        //return this;


    }

}
const instanciaUno = new Singleton('Emill');
const instanciaDos = new Singleton('Naomi');
const instanciaTres = new Singleton('Pepa');
console.log(`Nombre en la instancia1 es: ${instanciaUno.nombre}`);
console.log(`Nombre en la instancia1 es: ${instanciaDos.nombre}`);
console.log(`Nombre en la instancia1 es: ${instanciaTres.nombre}`);
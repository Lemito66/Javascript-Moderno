class PersonaNatural {
    //Propiedad
    static _conteo = 0;
    static get conteo() {
        return PersonaNatural._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre); //undefined
        console.log('Hola a todos soy un metodo estatico');
    }



    //Asi se crea una clase
    //Toda las clases en Javascript tienen por defecto el 'use strict', y viene por defecto
    //"use strict";
    nombre = "";
    codigo = "";
    frase = "";
    comida = "";

    constructor(nombre = "Emill", codigo = "001", frase = "Solo se que nada se") {
        //El constructor es un metodo que se va a ejecutar en el momento que se crea una instancia, el constructor es el unico que no retorna undefined a pesar de que no se ponga return
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        PersonaNatural._conteo++;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es: ${this.codigo}`);

    }
    miFrase() {
        this.quienSoy(); //Para llamar a la función de arriba
        console.log(`${this.codigo} dice ${this.frase}`);
    }

    //---------------------- Get y Set ------------------------ //


    //Set es para establecer un valor
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    //get es para recuperar un valor
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`; //?Siempre es bueno retornar algo
    }
}
class Heroe extends PersonaNatural{ // Heredar 
    clan='Sin clan'
    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase);//Hace referencia a la clase que heredo
        this.clan = 'Clash Of Clans';//Se debe llamar al this después del super
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();//llamar algo de la clase de padre, se lo hace con super
    }
}
const naito = new Heroe("Naito", "002", "Que quieres!");

//const naito = new Heroe();
console.log(naito);
naito.quienSoy();
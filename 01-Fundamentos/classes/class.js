/*  <script src="../classes/problema.js"></script> */
class PersonaNatural {
  //Propiedad
  static _conteo=0;



  //Asi se crea una clase
  //Toda las clases en Javascript tienen por defecto el 'use strict', y viene por defecto
  //"use strict";
  nombre = "";
  codigo = "";
  frase = "";
  comida="";

  constructor(nombre = "Emill", codigo = "001", frase = "Solo se que nada se") {
    //El constructor es un metodo que se va a ejecutar en el momento que se crea una instancia, el constructor es el unico que no retorna undefined a pesar de que no se ponga return
    this.codigo = codigo;
    this.nombre = nombre;
    this.frase = frase;
  }

  quienSoy(){
    console.log(`Soy ${this.nombre} y mi identidad es: ${this.codigo}`);
  }
  miFrase(){
    this.quienSoy();//Para llamar a la función de arriba
    console.log(`${this.codigo} dice ${this.frase}`);
  }

  //---------------------- Get y Set ------------------------ //


  //Set es para establecer un valor
  set setComidaFavorita(comida){
    this.comida = comida.toUpperCase();
  }
  //get es para recuperar un valor
  get getComidaFavorita(){
    return `La comida favorita de ${this.nombre} es ${this.comida}`;//Siempre es bueno retornar algo
  }
}
const naito = new PersonaNatural("Naito", "002", "Que quieres!");
const pepa = new PersonaNatural("Pepa", "003", "Holi");


/* console.log(naito);
console.log(pepa);
naito.quienSoy();
pepa.quienSoy();
naito.miFrase(); */
/* naito.setComidaFavorita = 'Hamburguesa'
//naito.nemesis = 'Duende Verde';//Esto se puede hacer
console.log(naito.getComidaFavorita);
console.log(naito); */
PersonaNatural._conteo = 2;
console.log('Conteo estatico',PersonaNatural._conteo);

/*  <script src="../classes/problema.js"></script> */
class PersonaNatural {
  //Asi se crea una clase
  //Toda las clases en Javascript tienen por defecto el 'use strict', y viene por defecto
  "use strict";
  nombre = "";
  codigo = "";
  frase = "";

  constructor(nombre = "Emill", codigo = "001", frase = "Solo se que nada se") {
    //El constructor es un metodo que se va a ejecutar en el momento que se crea una instancia, el constructor es el unico que no retorna undefined a pesar de que no se ponga return
    this.codigo = codigo;
    this.nombre = nombre;
    this.frase = frase;
  }
}
const naito = new PersonaNatural("Naito", "002", "Que quieres!");
const pepa = new PersonaNatural("Pepa", "003", "Holi");
console.log(naito);
console.log(pepa);

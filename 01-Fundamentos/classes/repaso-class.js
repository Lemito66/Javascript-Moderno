/*  <script src="../classes/problema.js"></script> */
class Persona {
  nombre = "";
  apellido = "";
  id = "";
  constructor(nombre, apellido, id) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
  }
  presentacion() {
    console.log(`Tu nombre es: ${this.nombre}\n
                Tu apellido es: ${this.apellido}\n
                Tu id es: ${this.id}`);
  }
}
const emill = new Persona("Emill", "Logroño", "0604312801");
console.log(emill);

/*  <script src="../classes/problema.js"></script> */
class Persona {
  nombre = "";
  apellido = "";
  id = "";
  apodo = '';
  constructor(nombre, apellido, id) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
  }
  set setDarleApodo(apodo) {
    this.apodo = apodo;
  }
  get getMostrarApodo() {
    return `El apodo de ${this.nombre} es: ${this.apodo}`;
  }
  presentacion() {
    console.log(`Tu nombre es: ${this.nombre}\n
                Tu apellido es: ${this.apellido}\n
                Tu id es: ${this.id}`);
  }
}
const emill = new Persona("Emill", "Logroño", "0604312801");
emill.setDarleApodo = 'Lemito66';
console.log(emill);
console.log(emill.getMostrarApodo);
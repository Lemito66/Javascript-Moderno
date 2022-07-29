class Persona {
  nombre = "";
  apellido = "";
  edad = "";
  apodo = "";
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.nombre = apellido;
    this.nombre = edad;
  }
  set setDarleApodo(apodo) {
    this.apodo = apodo;
  }
  get getMostrarApodo() {
    return `El apodo de ${this.apodo}`;
  }
}
const emill = new Persona("Emill", "Logroño", "25");
emill.setDarleApodo = "Lemito66";
console.log(emill);
console.log(emill.getMostrarApodo);

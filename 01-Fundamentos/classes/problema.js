/* <script src="../classes/problema.js"></script> */
const emill = {
  nombre: "Emill",
  edad: 24,
  imprimir() {
    console.log(`Nombre: ${this.nombre} -edad: ${this.edad}`);//This es para hacer una asignación
  },
};
const pedro = {
  nombre: "Pedro",
  edad: 15,
};
const meliza = {
  nombre: "Emill",
  edad: 24,
};
//emill.imprimir()
//Ok esto se debe de crar con la palabra new
function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');

    this.nombre=nombre;//Estos son constructores
    this.edad=edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} -edad: ${this.edad}`);//This es para hacer una asignación
      }
    return this.nombre,this.edad;
}
const maria = new Persona('Emill',24);//Creamos una nueva instancia
const mela = new Persona('Meliza',31);//Creamos una nueva instancia
console.log(maria);
maria.imprimir();
mela.imprimir();

class Persona {

    static porObjeto({ // Esto es para crear instancias de diferenctes formas
        nombre,
        apellido,
        pais
    }) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}
const nombreUno = 'Melissa',
    apellidoUno = 'Flores',
    paisUno = 'Ecuador';

const emill = {
    nombre: 'Emill',
    apellido: 'Logroño',
    pais: 'Ecuador',
}
const personaUno = new Persona(nombreUno, apellidoUno, paisUno);
const personaDos = Persona.porObjeto(emill);

personaUno.getInfo();
personaDos.getInfo();
//*Esto es una caracteristica nueva, que todavia no esta implementado en todos los navegadores

class Rectangulo {
    // #->  Va a hacer que sean metodos privados
    #area = 0;//Para hacerlo que nadie lo pueda modificar
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
        this.#area= base * altura;
    }
    calcularArea(){
        return this.base*this.altura;
    }
}
const rectangulo= new Rectangulo(5,5);
console.log(rectangulo.calcularArea());

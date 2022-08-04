export class Todo{
    constructor(tarea){
        this.tarea= tarea;

        this.id = new Date().getTime();//12345648
        this.completado = false;
        this.creado= new Date();
    }
}
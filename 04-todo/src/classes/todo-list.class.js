export class TodoList{
    constructor(){
        this.todos=[];
    }
    nuevoTodo(todo){
        this.todos.push(todo);
    }
    eliminarTodo(id){
        this.todos = this.todos.filter( todo => todo.id != id )// Vamos hacer una copia del arreglo excluyendo a los de la condición 
    }
    marcaCompletado(id){
        for (const todo of this.todos) {

            if (todo.id == id) {

                todo.completado = !todo.completado;
                break;
            }
        }

    }
    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado )// Me devuelve un arreglo de todos los todos que no esten completados

    }
}
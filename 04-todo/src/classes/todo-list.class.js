export class TodoList{
    constructor(){
        this.todos=[];
    }
    nuevoTodo(todo){
        this.todos.push(todo);
    }
    eliminarTodo(id){
        this.todos = this.todos.filter( todo => todo.id != id )// Vamos hacer una copia del arreglo de los que sean diferenctes al id
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
        
    }
}
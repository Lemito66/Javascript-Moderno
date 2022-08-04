export class TodoList{
    constructor(){
        this.todos=[];
    }
    nuevoTodo(todo){
        this.todos.push(todo);
    }
    eliminar(id){
        
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
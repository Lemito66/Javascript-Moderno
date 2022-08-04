import './styles.css';

/* import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class'; */

import {Todo,TodoList} from './classes';//Aqui se importa todo del archivo index.js que esta en la carpeta classes

const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo(tarea);
console.log(todoList);
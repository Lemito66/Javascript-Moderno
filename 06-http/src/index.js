/* import { init } from "./js/chistes-page";

init(); */



/* 
import { obtenerUsuario } from "./js/http-provider";

obtenerUsuario().then(console.log); */

/* import { init } from "./js/usuarios-page";
init(); */

import * as CRUD from "./js/crud-provider";//Otra forma de importar

CRUD.getUsuario(1).then(console.log);
CRUD.crearUsuario({
    name:'Emill',
    job: 'Desarrolador'
}).then(console.log);
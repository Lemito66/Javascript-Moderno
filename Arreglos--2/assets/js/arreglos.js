let arreglo = ['Emill','Jorge','Mateo'];
let arregloBorrado=arreglo.splice(1,1);//Elimina un elemento a partir de una posicion, y se puede eliminar más 
console.log({arreglo})
console.log({arregloBorrado})
console.log(arregloBorrado)

//Buscar algo en el arreglo
let buscarPosicion=arreglo.lastIndexOf('Emill')
console.log(buscarPosicion)//Si regresa -1 quiere decir que no lo encontro.
let a = 5;
if (a>10) {
    console.log('A es mayor a 10');
} else {
    console.log('A es menor a 10');
}
//console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay(); //0: Domingo 1: Lunes ...
console.log({dia});

if (dia === 0){ // Un igual regresa una asignación, 2 igual regresa un booleano, y 3 debes ser igual y del mismo tipo de dato
    console.log('Es domingo');
}else if(dia ===1){
    console.log('Es lunes');
}else if (dia ===2){
    console.log('Es martes');
}else{
    console.log('No es domingo, lunes o martes');
}
const diasDeLaSemana = {
    0:'domingo',    
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado',
};
console.log('Hoy es: ', diasDeLaSemana['10'] || 'Dia no definido');
const elMayor = (a,b)=> (a>b) ? a : b;
const elMenor = (a,b)=> (a<b) ? a : b;
const esMiembro = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares'
console.log(elMayor(20,15));
console.log(elMenor(15,20));
console.log(esMiembro(!false));

const amigo = false;
const amigoArr =[
    'Emill',
    'Jorge',
    'Juan',
    'Diego',
    amigo ? 'Ariel' : 'Chicle', // Este tipo de condiciones necesita ambos valores
];
console.log(amigoArr);
const nota=82.5;
const grado = nota >=95 ? 'A+' :
              nota >=90 ? 'A'  :
              nota >=85 ? 'B+' :
              nota >=80 ? 'B'  :
              nota >=75 ? 'C+' :
              nota >=70 ? 'C'  : 'F';
console.log(grado);
const carros = ['Ford', 'Mazda', 'Toyota','Honda'];
let i=0;
console.warn('While')
while (i< carros.length) {//Se ejecuta siempre y cuando esto sea verdadero
    if (i ===1) {
        //break; //Se rompe
        i++;
        continue;// para que no se ejecute esa instrucción y se haga lo siguiente
    }
    console.log(carros[i]);
    i++;
}
//undefine, null, false. Esto son falsas 

//Las diferenciaas es que el do while va ejecutar el bloque interno un vez
console.warn('Do while')
j=0;
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);

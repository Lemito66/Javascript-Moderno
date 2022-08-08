import { buscarHeroe as buscarHeroeCallback} from './js/callbacks';
import {buscarHeroe} from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spyder';

/* //El primer argumento siempre va a ser un error
buscarHeroe(heroeId1, (err, heroe1) => {
    if (err) {
        return console.error(err);
    }

    buscarHeroe(heroeId2, (err, heroe2) => {
        if (err) {
            return console.error(err);
        }
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    });

    
}); */

/* buscarHeroe( heroeId1 ).then( heroe1 => {

    //console.log(`Enviando a ${heroe.nombre}  a la misión`);

    buscarHeroe(heroeId2).then(heroe2 =>{
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    })
});
 */

Promise.all([ buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then( ([heroes1,heroes2]) => {
    
    console.log(`Enviando a ${heroes1.nombre} y ${heroes2.nombre} a la misión`);
}).catch( err => {
    alert(err)
}).finally(()=>{
    alert('Se termino promiise.all')
});

console.log('Fin del Programa');
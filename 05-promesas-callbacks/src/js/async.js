import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";


buscarHeroeAsync('iron2')
    .then(console.log)
    .catch(console.warn);
buscarHeroe('capi2')
    .then(console.log)
    .catch(console.warn);
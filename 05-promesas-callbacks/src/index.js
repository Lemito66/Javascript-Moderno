import { obtenerHeroresArr } from "./js/await";

console.time('await')

obtenerHeroresArr().then(heroes => {
    console.table(heroes);
    console.timeEnd('await');
});

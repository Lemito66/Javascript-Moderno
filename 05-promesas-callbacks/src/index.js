import { obtenerHeroesAwait, obtenerHeroresArr } from "./js/await";

console.time('await')

obtenerHeroesAwait('capi2e')
    .then(heroes => {
    console.log(heroes);

    console.timeEnd('await');
}).catch(console.warn);

//200 lo hizo bien, 201 se creo el registro,404 no encontro el recurso,403 bad request,500 problemas del lado del servidor

const jokeUrl = 'https://api.chucknorris.io/jokes/random';

/* fetch(jokeUrl).then(resp => {;//Recibe un input y una configuración y devuelve una promesa

    resp.json().then(({id, value}) => {
        
        console.log(id);
        console.log(value);
    });
}) */
fetch(jokeUrl) //Se hace la petición
    .then(resp => resp.json()) //Esta resolución regresa otra promesa
    .then(({
        id,
        value
    }) => {
        console.log(id, value);
    }); //La imprimo
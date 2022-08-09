const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2'

const obtenerChiste = async () => {

    try {
        const resp = await fetch(jokeUrl);
        if (!resp.ok) throw 'No se puedo realizar la petición';

        const {icon_url,id,value}=await resp.json();
        return {icon_url,id,value};
    } catch (error) {
        throw error;
    }


}

const obtenerUsuario = async() => {
    const resp = await fetch (urlUsuarios);
    const {data:usuarios} = await resp.json();//dos puntos para renombrar

    return usuarios;
}

export {
    obtenerChiste,
    obtenerUsuario,
}

//esto en el index:
/*
import { obtenerChiste } from "./js/http-provider";

obtenerChiste().then(console.log); */
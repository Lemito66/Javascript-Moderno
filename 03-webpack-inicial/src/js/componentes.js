//import '../css/componentes.css';
export const saludar = (nombre) => { // Export es para exportar la función y luego importar
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;
    document.body.append(h1);
}
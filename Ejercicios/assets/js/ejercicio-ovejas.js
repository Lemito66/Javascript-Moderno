/* 
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

Al ejecutar el método debería devolver lo siguiente:

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
 */
const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

const contarOvejas = (ovejas) => {
  listaParaOvejas = [];

  // Hacemos el recorrido del arreglo que tiene un objeto
  ovejas.forEach((objeto) => {
    // Si el color es rojo
    if (objeto.color === "rojo") {
      // Y el nombre incluye la letra a o n
      if (
        objeto.name.toLowerCase().includes("a") &&
        objeto.name.toLowerCase().includes("n")
      ) {
        listaParaOvejas.push(objeto); // Añadimos a una lista los objetos que sean de color rojo y incluyan la letra a y n
      }
    }
  });
  return listaParaOvejas;
};

console.log(contarOvejas(ovejas));

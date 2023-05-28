import { Serie } from "./serie";

function crearSerie(imagenrep:string,nombre:string,categoria:string) {
    const persona = new Serie (imagenrep,nombre,categoria);
    console.log(`Nombre: ${persona.imagenrep}
  Cedula: ${persona.nombre}
  Licencia:${persona.categoria}`) 
  }
  crearSerie("aqui va la imagen", "Alverto","Miedo") //test

function crearSeri(imagenrep:string,nombre:string,categoria:string) {
    const serie = new Serie (nombre,categoria,imagenrep);
    console.log(` imagen: ${serie.imagenrep}
  nombre: ${serie.nombre}
  categoria:${serie.categoria}`) 
  }
crearSeri("aqui va la imagen", "Alverto","Miedo") //test

function crearSerie2(imagenrep:string,nombre:string,categoria:string) {
  const serie = new Serie (nombre,categoria,imagenrep);
  console.log(` imagen: ${serie.imagenrep}
nombre: ${serie.nombre}
categoria:${serie.categoria}`) 
}
crearSerie2("imagen","gustavo","Romance")

// test director
import { Director } from "./director";
let director = new Director("Steven Spielberg", "foto.jpg", "Una descripción del director", "Jaws, Jurassic Park, Schindler's List");
console.log(director.mostrarDetalledir);
// test crear serie y agregar serie
const serie1 = Serie.crearNuevaSerie("Serie 1", "Categoría 1", "imagen1.jpg");
const serie2 = Serie.crearNuevaSerie("Serie 2", "Categoría 2", "imagen2.jpg");

const seriePrincipal = new Serie("Serie Principal", "Categoría Principal", "imagenPrincipal.jpg");
seriePrincipal.agregarSerie(serie1);
seriePrincipal.agregarSerie(serie2);

const seriePrincipal2 = new Serie ("Serie Principal", "Categoría Principal", "imagenPrincipal.jpg");
seriePrincipal2.agregarCategoria("Acción");
seriePrincipal2.agregarCategoria("Drama"); 
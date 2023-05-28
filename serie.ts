import { Director } from './director'
import { Actores } from './actores'

export class Serie{
    nombre:string;
    categoria:string[]
    imagenrep:string
    director: Director | null;
    actor: Actores | null;
    constructor (nombre:string, categoria:string,imagenrep:string){
     this.nombre=nombre
     this.categoria=[categoria]
     this.imagenrep=imagenrep
     this.serieses=[]
     this.director = null;
     this.actor = null;
    }
    get lista(): Array<Serie> {
        return this.serieses.sort((a, b) => {
          if (a.nombre < b.nombre) {
            return -1;
          } else if (a.nombre > b.nombre) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    add(nombre: string, categoria: string, imagenrep: string) {
        const serie = new Serie (nombre, categoria, imagenrep);
        this.serieses.push(serie);
    }
     private serieses: Array<Serie>;
     
    Detalles(serie:Serie) {
      return {
        nombre: serie.nombre,
        categoria: serie.categoria,
        imagen: serie.imagenrep
      }
    }
    DetallesPorNombre(nombre? : string): void {
      if (!this.serieses.filter(serie => serie.nombre === nombre).length) {
        console.log(`La serie ${nombre} no existe.`)
        return;
        }
      const serieDetalles = this.Detalles(this.serieses.filter(serie => serie.nombre === nombre)[0]);
      console.log(serieDetalles)
      }
    obtenerCategorias(): string[] {
      return this.categoria;
      }
    agregarSerie(serie: Serie): void {
      this.serieses.push(serie);
      } 
    static crearNuevaSerie(nombre: string, categoria: string, imagenrep: string): Serie {
      const nuevaSerie = new Serie(nombre, categoria, imagenrep);
        return nuevaSerie;
        }
    agregarCategoria(categoria: string): void {
      this.categoria.push(categoria);
        }
    static crearNuevaCategoria(nombre: string, serie: Serie): void {
          serie.agregarCategoria(nombre);
    }
    asignarDirector(director: Director): void {
      this.director = director;
    }
    obtenerDirector(): Director | null{
      return this.director;
    } 
    static asignarNuevoDirector(director: Director, serie: Serie): void {
      serie.asignarDirector(director);
    }
    asignarActor(actor: Actores): void {
      this.actor = actor;
    }
    obtenerActor(): Actores | null{
      return this.actor;
    } 
    static asignarNuevoActor(actor: Actores, serie: Serie): void {
      serie.asignarActor(actor);
    }
 }
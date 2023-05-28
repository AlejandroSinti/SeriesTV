export class Plataforma{
    nombre:string;
    sitioweb:string;
    planes:string[];
    precio:number;
    descripcion: string;
    constructor(nombre:string,sitioweb:string,planes:string[],precio:number,descripcion: string)
    {
        this.nombre=nombre;
        this.sitioweb=sitioweb;
        this.planes=planes;
        this.precio=precio;
        this.descripcion = descripcion;
    }
    listasPorNombre(nombrePlataforma: string): string[] {
        let listado: string[] = [];
        for (let i = 0; i < this.planes.length; i++) {
            if (this.nombre === nombrePlataforma) {
                listado.push(this.planes[i]);
            }
        }
        return listado;   
    }
    obtenerDescripcion(nombrePlataforma: string): string {
        for (let i = 0; i < this.planes.length; i++) {
          if (this.nombre === nombrePlataforma) {
            return this.descripcion;
          }
        }
        return '';
      }
}
export class Actores{
    nombre:string;
    fotografia:string;
    descripcion:string;
    seriesActuadas:string;
    
    constructor(nombre:string, fotografia:string,descripcion:string,seriesActuadas:string)
    {
    this.nombre=nombre;
    this.fotografia=fotografia;
    this.descripcion=descripcion;
    this.seriesActuadas=seriesActuadas;
    } 
    nombreactores(): string[] {
        return this.getSeriesActuadas().map(seriesActuadas => seriesActuadas,this.nombre);
    }
    
    getSeriesActuadas(): string[] {
        return this.seriesActuadas.split(',').filter(value => value);
    }
    mostrarDetalleact(seriesActuadas:string): string {
        return `${this.nombre} ha actuado en la serie ${seriesActuadas}. Es una ${this.descripcion}`;
    }
    static crearNuevoActor(nombre: string, fotografia: string, descripcion: string, seriesActuadas: string): Actores {
        const nuevoDirector = new Actores (nombre, fotografia, descripcion, seriesActuadas);   
        return nuevoDirector;
     } 
}


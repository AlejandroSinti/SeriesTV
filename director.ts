export class Director{
    nombre:string;
    fotografia:string;
    descripcion:string;
    seriesDirigidas:string;
    constructor(nombre:string,fotografia:string,descripcion:string,seriesDirigidas:string)
    {
        this.nombre=nombre;
        this.fotografia=fotografia;
        this.descripcion=descripcion;
        this.seriesDirigidas=seriesDirigidas;
    }
    nombredirectores(): string[] {
        return this.getSeriesDirigidas().map(serieDirigida => serieDirigida,this.nombre);
    }
    
    getSeriesDirigidas(): string[] {
        return this.seriesDirigidas.split(',').filter(value => value);
    }
    mostrarDetalledir(serieDirigida:string): string {
        return `${this.nombre} ha dirigido la serie ${serieDirigida}. Es una ${this.descripcion}`;
    }
    static crearNuevoDirector(nombre: string, fotografia: string, descripcion: string, seriesDirigidas: string): Director {
        const nuevoDirector = new Director(nombre, fotografia, descripcion, seriesDirigidas);   
        return nuevoDirector;
     }
}
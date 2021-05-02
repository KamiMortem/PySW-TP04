export class Pasaje {
    
    dniPasajero: number
    precioPasaje:number
    categoriaPasaje:string
    fechaCompra:Date

    constructor(dniPasaero:number,precioPasaje:number,categoriaPasaje:string){
        this.dniPasajero=dniPasaero
        this.categoriaPasaje=categoriaPasaje
        this.precioPasaje=precioPasaje
    }

}

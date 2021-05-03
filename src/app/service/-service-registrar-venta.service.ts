import { Injectable } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegistrarVentaService {

  private pasaje: Pasaje
  private precioDescuento: number = 0
  private pasajes: Array<Pasaje>
  
  constructor() {
    this.pasajes = new Array<Pasaje>()
  }

  guardarPasaje(pasaje: Pasaje): void {
    this.pasaje = pasaje
    if (this.pasaje.precioPasaje > 0 && this.pasaje.categoriaPasaje != "" && this.pasaje.dniPasajero > 0) {
      this.pasaje.fechaCompra = new Date()
      if (this.precioDescuento == 0) {
        this.precioDescuento = this.pasaje.precioPasaje
      }
      this.pasaje.precioPasaje = this.precioDescuento
      this.pasajes.push(pasaje);
    }
  }

  obtenerDescuento(precioPasaje: number, categoriaPasaje: string): number {
    this.precioDescuento = precioPasaje
    if (categoriaPasaje == "m") {
      this.precioDescuento *= 0.25
    } else {
      if (categoriaPasaje == "j") {
        this.precioDescuento *= 0.5
      }
    }
    return this.precioDescuento
  }


  obtenerResumen(): Array<any> {
    let resumen: Array<any> = [
      { categoria: "Niño", precioTotal: 0, cantidadPasajes: 0 },
      { categoria: "Adulto", precioTotal: 0, cantidadPasajes: 0 },
      { categoria: "Jubilado", precioTotal: 0, cantidadPasajes: 0 },
    ]

    this.pasajes.forEach(pasaje => {
      if (pasaje.categoriaPasaje == "m") {
        resumen[0].cantidadPasajes += 1
        resumen[0].precioTotal += pasaje.precioPasaje
      } else {
        if (pasaje.categoriaPasaje == "a") {
          resumen[1].cantidadPasajes += 1
          resumen[1].precioTotal += pasaje.precioPasaje
        } else {
          resumen[2].cantidadPasajes += 1
          resumen[2].precioTotal += pasaje.precioPasaje
        }
      }
    });
    return resumen
  }

  obtenerPasajes(): Array<Pasaje> {
    let pasajesTemp: Array<Pasaje>
    pasajesTemp = new Array<Pasaje>()
    let pasajeTemp:Pasaje
    this.pasajes.forEach(pasaje => {
      pasajeTemp=pasaje
      if (pasaje.categoriaPasaje=="m") {
        pasajeTemp = new Pasaje(pasaje.dniPasajero,pasaje.precioPasaje,"Niño")
      }else{
        if (pasaje.categoriaPasaje=="j") {
          pasajeTemp = new Pasaje(pasaje.dniPasajero,pasaje.precioPasaje,"Jubilado")
        }else{
          pasajeTemp = new Pasaje(pasaje.dniPasajero,pasaje.precioPasaje,"Adulto")
        }
      }
      pasajeTemp.fechaCompra=pasaje.fechaCompra
      pasajesTemp.push(pasajeTemp)
    });
    return pasajesTemp
  }
}

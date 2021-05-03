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
    this.pasaje=pasaje
    this.pasaje.fechaCompra = new Date()
    if (this.precioDescuento == 0) {
      this.precioDescuento = this.pasaje.precioPasaje
    }
    this.pasaje.precioPasaje = this.precioDescuento
    this.pasajes.push(pasaje);
  }

  obtenerDescuento(precioPasaje: number, categoriaPasaje: string):number {
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


  obtenerResumen():Array<any> {
    let resumen: Array<any> = [
      { categoria: "m", precioTotal: 0, cantidadPasajes: 0 },
      { categoria: "a", precioTotal: 0, cantidadPasajes: 0 },
      { categoria: "j", precioTotal: 0, cantidadPasajes: 0 },
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
    return this.pasajes
  }
}

import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { ServiceRegistrarVentaService } from 'src/app/service/-service-registrar-venta.service';

@Component({
  selector: 'app-venta-pasajes',
  templateUrl: './venta-pasajes.component.html',
  styleUrls: ['./venta-pasajes.component.css']
})
export class VentaPasajesComponent implements OnInit {

  pasaje: Pasaje
  serviceRegistro: ServiceRegistrarVentaService
  dniPasajero: number =0
  precioPasaje: number = 0
  categoriaPasaje: string = ""
  fechaCompra: Date
  precioDescuento:number=0
  constructor() {
    
  }

  ngOnInit(): void {
    this.serviceRegistro= new ServiceRegistrarVentaService()
  }

  guardarPasaje() {
    this.pasaje = new Pasaje(this.dniPasajero,this.precioPasaje,this.categoriaPasaje)
    this.serviceRegistro.guardarPasaje(this.pasaje)
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
}

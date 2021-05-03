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
  dniPasajero: number = 0
  precioPasaje: number = 0
  categoriaPasaje: string = ""
  fechaCompra: Date
  precioDescuento: number = 0
  resumenPasajes: Array<any>
  todosPasajes: Array<any>
  categorias: Array<any>= [
    {nombre:"niño", categoria:"m"},
    {nombre:"Jubilado", categoria:"j"},
    {nombre:"Adulto", categoria:"a"},
  ]
  constructor() {
    this.resumenPasajes = new Array()
    this.serviceRegistro = new ServiceRegistrarVentaService()
    this.todosPasajes= new Array()
    this.resumenPasajes= this.serviceRegistro.obtenerResumen()
  }

  ngOnInit(): void {

  }

  guardarPasaje() {
    this.pasaje = new Pasaje(this.dniPasajero, this.precioPasaje, this.categoriaPasaje)
    console.log("Guardando pasaje..." + this.pasaje.categoriaPasaje + " " + this.pasaje.dniPasajero + " " + this.pasaje.precioPasaje)
    this.serviceRegistro.guardarPasaje(this.pasaje)
    this.resumenPasajes= this.serviceRegistro.obtenerResumen()
    this.todosPasajes= this.serviceRegistro.obtenerPasajes()
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco-palabras',
  templateUrl: './banco-palabras.component.html',
  styleUrls: ['./banco-palabras.component.css']
})
export class BancoPalabrasComponent implements OnInit {

  opcionTipoDeJuego: number = 1
  numeroCorrectoDelJuego: number = 0
  indicePalabraAUsar: number
  nombreTipoDeJuego: string
  cantidadEquivocacion: number = 0
  mensajeEquivocacion: string = ""
  bpalabras: Array<string> = [
    'casa',
    'leon',
    'arbol',
    'elefante',
    'queso',
    'indio',
    'mesa',
    'silla',
    'doctor',
    'enfermera',
  ]

  opcionesAElegir: Array<any> = [
    { num: -1 }
  ]

  constructor() {

  }

  ngOnInit(): void {
    //console.log("iniciado...")
    this.palabraRandom()
    this.obtenerOpcionTipoDeJuego()
    this.obtenerOpcionesRandom()
    this.agregandoOpcionCorrecta()
    this.mensajeEquivocacion=" "
    this.cantidadEquivocacion=0
  }

  comprobarOpcionCorrecta(num : number): void {
    if (num == this.numeroCorrectoDelJuego) {
      this.ngOnInit()
    }else{
      this.cantidadEquivocacion+=1
      this.mensajeEquivocacion="Oh! Se equivoco "+this.cantidadEquivocacion+" veces."
    }
  }

  comprobarDobleOpcion(ran: number, indice: number): boolean {
    for (let index = 0; index <= indice; index++) {
      if (ran == this.opcionesAElegir[index]) {
        return true
      }
    }
    return false
  }

  obtenerOpcionesRandom() {
    let num: number
    let menor: number
    let mayor: number

    if (this.numeroCorrectoDelJuego - 3 < 1) {
      menor = 1
      mayor = this.numeroCorrectoDelJuego + 6
    } else {
      menor = this.numeroCorrectoDelJuego - 3
      mayor = this.numeroCorrectoDelJuego + 4
    }

    for (let index = 0; index < 4; index++) {
      do {
        num = Math.floor(Math.random() * (mayor)) + menor
      } while (this.comprobarDobleOpcion(num, index) || num==this.numeroCorrectoDelJuego);
      //console.log("--- "+num)
      this.opcionesAElegir[index] = num
    }
  }

  palabraRandom() {
    this.indicePalabraAUsar = Math.floor(Math.random() * (9)) + 0
    //console.log("Palabra random " + this.bpalabras[this.indicePalabraAUsar])
  }

  vocales(): number {
    return this.bpalabras[this.indicePalabraAUsar].match(/[aeiou]/gi).length;
  }

  consonantes(): number {
    return this.bpalabras[this.indicePalabraAUsar].match(/[bcdfghjklmnpkrstvwxyz]/gi).length;
  }

  letras(): number {
    return this.bpalabras[this.indicePalabraAUsar].match(/[abcdefghijklmnopkrstuvwxyz]/gi).length;
  }

  silabas(): number {
    this.bpalabras[this.indicePalabraAUsar] = this.bpalabras[this.indicePalabraAUsar].toLowerCase(); 
    if (this.bpalabras[this.indicePalabraAUsar].length <= 3) { return 1; }           
    this.bpalabras[this.indicePalabraAUsar] = this.bpalabras[this.indicePalabraAUsar].replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, ""); 
    this.bpalabras[this.indicePalabraAUsar] = this.bpalabras[this.indicePalabraAUsar].replace(/^y/, ""); 
    return this.bpalabras[this.indicePalabraAUsar].match(/[aeiouy]{1,2}/g).length;
  }

  agregandoOpcionCorrecta(){
    let op:number = Math.floor(Math.random() * (3)) + 0
    this.opcionesAElegir[op] = this.numeroCorrectoDelJuego
  }

  obtenerOpcionTipoDeJuego() {
    this.opcionTipoDeJuego = Math.floor(Math.random() * (4)) + 1
    switch (this.opcionTipoDeJuego) {
      case 1:
        this.numeroCorrectoDelJuego = this.vocales()
        this.nombreTipoDeJuego=" VOCALES"
        break;
      case 2:
        this.numeroCorrectoDelJuego = this.consonantes()
        this.nombreTipoDeJuego="CONSONANTES"
        break;
      case 3:
        this.numeroCorrectoDelJuego = this.letras()
        this.nombreTipoDeJuego="LETRAS"
        break;
      case 4:
        this.numeroCorrectoDelJuego = this.silabas()
        this.nombreTipoDeJuego="SILABAS"
        break;
    }
  }

}

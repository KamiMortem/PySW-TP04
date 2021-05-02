import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  
  cont: number = 0

  articulos: Array < any > = [
    { titulo: 'Titulo01', noticia: 'texto descriptivo noticia 01', img: '../../../../assets/img/paisaje1.jpg' },
    { titulo: 'Titulo02', noticia: 'texto descriptivo noticia 02', img: '../../../../assets/img/paisaje2.jpg' },
    { titulo: 'Titulo03', noticia: 'texto descriptivo noticia 03', img: '../../../../assets/img/paisaje3.jpg' },
    { titulo: 'Titulo04', noticia: 'texto descriptivo noticia 04', img: '../../../../assets/img/paisaje4.jpg' },
    { titulo: 'Titulo05', noticia: 'texto descriptivo noticia 05', img: '../../../../assets/img/paisaje5.jpg' },
    { titulo: 'Titulo06', noticia: 'texto descriptivo noticia 06', img: '../../../../assets/img/paisaje6.jpg' },
  ]

  constructor() {
    
  }

  retrocederArticulo(){
    this.cont-=1
    if(this.cont<0){
      this.cont=5
    }
  }

  adelantarArticulo(){
    this.cont+=1
    if(this.cont>5){
      this.cont=0
    }
  }

  ngOnInit(): void {
  }

}

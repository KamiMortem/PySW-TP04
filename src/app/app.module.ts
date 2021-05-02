import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/layout/home/home.component';
import { FormControl, FormsModule } from '@angular/forms';
import { NoticiasComponent } from './components/layout/noticias/noticias.component';
import { BancoPalabrasComponent } from './components/layout/banco-palabras/banco-palabras.component';
import { VentaPasajesComponent } from './components/layout/venta-pasajes/venta-pasajes.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NoticiasComponent,
    BancoPalabrasComponent,
    VentaPasajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

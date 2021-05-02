import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/layout/home/home.component";
import { NoticiasComponent } from "./components/layout/noticias/noticias.component"
import { BancoPalabrasComponent } from './components/layout/banco-palabras/banco-palabras.component';
import { VentaPasajesComponent } from './components/layout/venta-pasajes/venta-pasajes.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'bancoDePalabras', component: BancoPalabrasComponent},
  { path: 'ventaDePasajes', component: VentaPasajesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

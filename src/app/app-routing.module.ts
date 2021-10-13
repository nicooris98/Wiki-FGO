import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BuscadorCeComponent } from './componentes/buscador-ce/buscador-ce.component';
import { BuscadorCoComponent } from './componentes/buscador-co/buscador-co.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'servant', component: BuscadorComponent },
  { path: 'ce', component: BuscadorCeComponent },
  { path: 'co', component: BuscadorCoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

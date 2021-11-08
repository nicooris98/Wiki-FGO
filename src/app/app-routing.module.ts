import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProbComponent } from './componentes/prob/prob.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'buscar', component: BuscadorComponent },
  { path: 'prob', component: ProbComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

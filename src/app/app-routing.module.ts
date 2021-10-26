import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RuletaComponent } from './componentes/ruleta/ruleta.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'buscar', component: BuscadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

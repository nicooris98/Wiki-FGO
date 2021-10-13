import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServantsComponent } from './componentes/servants/servants.component';
import { HttpClientModule } from '@angular/common/http';
import { ServantComponent } from './componentes/servant/servant.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BuscadorCeComponent } from './componentes/buscador-ce/buscador-ce.component';
import { CesComponent } from './componentes/ces/ces.component';
import { CeComponent } from './componentes/ce/ce.component';
import { BuscadorCoComponent } from './componentes/buscador-co/buscador-co.component';
import { CommandComponent } from './componentes/command/command.component';
import { CommandsComponent } from './componentes/commands/commands.component';

@NgModule({
  declarations: [
    AppComponent,
    ServantsComponent,
    ServantComponent,
    BuscadorComponent,
    InicioComponent,
    BuscadorCeComponent,
    CesComponent,
    CeComponent,
    BuscadorCoComponent,
    CommandComponent,
    CommandsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServantsComponent } from './componentes/servants/servants.component';
import { HttpClientModule } from '@angular/common/http';
import { ServantComponent } from './componentes/servant/servant.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CeComponent } from './componentes/ce/ce.component';
import { CommandComponent } from './componentes/command/command.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { DetCeComponent } from './componentes/det-ce/det-ce.component';
import { DetCoComponent } from './componentes/det-co/det-co.component';

@NgModule({
  declarations: [
    AppComponent,
    ServantsComponent,
    ServantComponent,
    BuscadorComponent,
    InicioComponent,
    CeComponent,
    CommandComponent,
    DetalleComponent,
    DetCeComponent,
    DetCoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    MatDialog,
    OverlayModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServantsComponent } from './componentes/items/items.component';
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
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { PaginatePipe } from './pipes/paginate.pipe';
import { FavConfirmComponent } from './componentes/fav-confirm/fav-confirm.component';
import { ChartsModule } from 'ng2-charts';
import { ProbComponent } from './componentes/prob/prob.component';
import {MatRadioModule} from '@angular/material/radio';


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
    DetCoComponent,
    PaginatePipe,
    FavConfirmComponent,
    ProbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatPaginatorModule,
    FormsModule,
    ChartsModule,
    MatRadioModule
  ],
  providers: [
    MatDialog,
    OverlayModule,
    MatDialogModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

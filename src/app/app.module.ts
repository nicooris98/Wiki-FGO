import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServantsComponent } from './componentes/servants/servants.component';
import { HttpClientModule } from '@angular/common/http';
import { ServantComponent } from './componentes/servant/servant.component';

@NgModule({
  declarations: [
    AppComponent,
    ServantsComponent,
    ServantComponent
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

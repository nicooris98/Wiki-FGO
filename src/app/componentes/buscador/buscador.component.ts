import { Component, OnInit } from '@angular/core';
import { ServantService } from 'src/app/servicios/servant.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  pasarParametro: string = this.servant.getParametro();//Es el parametro que paso a servants.component

  constructor(private servant: ServantService)
  {
    /* this.servant.setParametro('***'); */
    /* this.servant.setServant(); */
  }

  ngOnInit(): void {
    this.buscar(this.pasarParametro);
    var input = <HTMLInputElement>document.getElementById('buscador');
    input.value = this.servant.getParametro();
    var keys = Object.keys(localStorage);
    var i = keys.length;
    while ( i-- ) {
      if(!this.servant.getParaID().includes(keys[i].toString()))
      {
        //this.servant.setParaID(localStorage.getItem(keys[i]));
        this.servant.setParaID(keys[i].toString());
      }
    }
  }

  ngOnChanges(): void {
    this.buscar(this.pasarParametro);
  }

  buscar(parametro: string): void{
    //console.log(parametro);
    this.servant.clearParaID();
    this.servant.setParametro(parametro);
    this.pasarParametro = this.servant.getParametro();
  }

  mostrarFav(): void {
    var keys = Object.keys(localStorage);
    var i = keys.length;
    while ( i-- ) {
      if(!this.servant.getParaID().includes(keys[i].toString()))
      {
        //this.servant.setParaID(localStorage.getItem(keys[i]));
        this.servant.setParaID(keys[i].toString());
      }
    }
    //console.log(this.servant.getParaID());
    this.servant.setParametro('***');
    this.pasarParametro = this.servant.getParametro();
  }

}

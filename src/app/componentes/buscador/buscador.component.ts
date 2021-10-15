import { Component, OnInit } from '@angular/core';
import { ServantService } from 'src/app/servicios/servant.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  pasarParametro: string = '';//Es el parametro que paso a servants.component

  constructor(private servant: ServantService) 
  {
    this.servant.setParametro('***');
    /* this.servant.setServant(); */
  }

  ngOnInit(): void {
  }

  buscar(parametro: string): void{
    //console.log(parametro);
    this.servant.setParametro(parametro);
    this.pasarParametro = this.servant.getParametro();
  }

}

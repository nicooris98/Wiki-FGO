import { Component, OnInit } from '@angular/core';
import { ServantService } from 'src/app/servicios/servant.service';

@Component({
  selector: 'app-buscador-ce',
  templateUrl: './buscador-ce.component.html',
  styleUrls: ['./buscador-ce.component.css']
})
export class BuscadorCeComponent implements OnInit {

  pasarParametro: string = '';//Es el parametro que paso a servants.component

  constructor(private ce: ServantService) 
  {
    this.ce.setParametro('***');
    this.ce.setCraft();
  }

  ngOnInit(): void {
  }

  buscarCe(parametro: string): void{
    //console.log(parametro);
    this.ce.setParametro(parametro);
    this.pasarParametro = this.ce.getParametro();
  }

}

import { Component, OnInit } from '@angular/core';
import { BuscarService } from 'src/app/servicios/buscar.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  pasarParametro: string = '';

  constructor(private buscar: BuscarService) { }

  ngOnInit(): void {
  }

  buscarServant(parametro: string): void{
    //console.log(parametro);
    this.buscar.setParametro(parametro);
    this.pasarParametro = this.buscar.getParametro();
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  parametro: string = '0';

  constructor() { }

  setParametro(valor: string): void{
    this.parametro = valor;
  }

  getParametro(): string{
    return this.parametro;
  }

}

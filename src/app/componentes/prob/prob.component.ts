import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prob',
  templateUrl: './prob.component.html',
  styleUrls: ['./prob.component.css']
})
export class ProbComponent implements OnInit {

  tipo: string = '';
  rareza: string = '';
  probabilidad: number = 0;
  tiradas: number;
  sq: number = 0;

  campos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('entro');
    this.calcularProb();
  }

  comprobar(): boolean {
    if(this.tipo == '' && this.rareza == '' && this.sq == null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  calcularTiradas(): void {
    this.tiradas = Math.floor(this.sq/3);
  }

  alerta(algo: string){
    alert(algo);
  }

  calcularProb(): void {
    if(this.comprobar())
    {
      this.calcularTiradas();
      switch (this.tipo) {
        case 'servant':
          switch (this.rareza) {
            case '5':
              this.probabilidad = this.probServ5();
              break;
            case '4':
              this.probabilidad = this.probServ4();
              break;
            case '3':
              this.probabilidad = this.probServ3();
              break;
            default:
              break;
          }
          break;
        case 'ce':
          switch (this.rareza) {
            case '5':
              this.probabilidad = this.probCe5();
              break;
            case '4':
              this.probabilidad = this.probCe4();
              break;
            case '3':
              this.probabilidad = this.probCe3();
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    }
  }

  probServ5(): number {
    return (1-Math.pow((1-0.007), this.tiradas));
  }

  probServ4(): number {
    return (1-Math.pow((1-0.0150), this.tiradas));
  }

  probServ3(): number {
    return (1-Math.pow((1-0.04), this.tiradas));
  }

  probCe5(): number {
    return (1-Math.pow((1-0.0280), this.tiradas));
  }

  probCe4(): number {
    return (1-Math.pow((1-0.04), this.tiradas));
  }

  probCe3(): number {
    return (1-Math.pow((1-0.08), this.tiradas));
  }

}

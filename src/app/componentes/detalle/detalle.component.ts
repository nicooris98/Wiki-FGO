import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Servant } from 'src/app/interfaces/servant';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent implements OnInit {

  imagen: string = this.data.img[1];

  public lineChartData: ChartDataSets[] = [
    { data: this.data.atkGrowth, label: 'Ataque' },
    { data: this.data.hpGrowth, label: 'Vida' },
  ];

  public lineChartLabels: Label[] = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
  '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
  '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
  '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
  '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
  '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
  '71', '72', '73', '74', '75', '76', '77', '78', '79', '80',
  '81', '82', '83', '84', '85', '86', '87', '88', '89', '90',
  '91', '92', '93', '94', '95', '96', '97', '98', '99', '100',
  ];

  public lineChartType: ChartType = "line";

  public lineChartOptions = {
    responsive: true,
  };

  public lineChartLegend = true;
  public lineChartPlugins = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Servant
  ) { }

  ngOnInit(): void {
    //console.log(this.data.np.length);
    var input = <HTMLInputElement>document.getElementById('1');
    input.className = 'asc activo';
  }

  changeImg(num: number): void {
    this.imagen = this.data.img[num];
    var input = <HTMLInputElement>document.getElementById(num.toString());
    input.className = 'asc activo';
    for (let index = 1; index < 5; index++) {
      if(index!=num)
      {
        var inputOtro = <HTMLInputElement>document.getElementById(index.toString());
        inputOtro.className = 'asc no-activo';
      }
    }
  }

}

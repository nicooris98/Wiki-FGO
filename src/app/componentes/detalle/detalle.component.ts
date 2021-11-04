import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Servant } from 'src/app/interfaces/servant';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent implements OnInit {

  imagen: string = this.data.img[1];

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

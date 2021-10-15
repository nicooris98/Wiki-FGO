import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Servant } from 'src/app/servant';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Servant
  ) { }

  ngOnInit(): void {
    //console.log(this.data.np.length);
  }

}

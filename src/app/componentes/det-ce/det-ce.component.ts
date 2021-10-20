import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Craft } from 'src/app/interfaces/craft';
@Component({
  selector: 'app-det-ce',
  templateUrl: './det-ce.component.html',
  styleUrls: ['./det-ce.component.css']
})
export class DetCeComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Craft
  ) { }

  ngOnInit(): void {
  }

}

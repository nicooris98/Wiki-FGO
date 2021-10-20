import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Command } from 'src/app/interfaces/command';

@Component({
  selector: 'app-det-co',
  templateUrl: './det-co.component.html',
  styleUrls: ['./det-co.component.css']
})
export class DetCoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Command
  ) { }

  ngOnInit(): void {
  }

}

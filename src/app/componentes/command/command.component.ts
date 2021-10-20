import { Component, OnInit, Input } from '@angular/core';
import { Command } from 'src/app/interfaces/command';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetCoComponent } from '../det-co/det-co.component';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  @Input() commandStr: string = '';
  command: Command = {
    id: 0,
    name: '',
    rarity: '',
    detail: '',
    img: ''
  }

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.parseStrJson();
  }

  parseStrJson(){
    //console.log('parseStrJson()')
    var result = JSON.parse(JSON.stringify(this.commandStr));
    var img = result['id'];
    //console.log(result);
    this.command.id = result['collectionNo'];
    this.command.name = result['name'];
    this.command.rarity = result['rarity'];
    this.command.detail = result['skills']['0']['detail'];
    this.command.img = result['extraAssets']['charaGraph']['cc'][img];
  }

  verDetalle(): void {
    this.dialog.open(DetCoComponent, {
      width      : '100%',
      maxWidth   : '600px',
      height     : 'auto',
      hasBackdrop: true,
      maxHeight  : '700px',
      data: {
        name: this.command.name,
        detail: this.command.detail
      }
    });
  }

}

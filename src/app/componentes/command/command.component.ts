import { Component, OnInit, Input } from '@angular/core';
import { Command } from 'src/app/interfaces/command';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetCoComponent } from '../det-co/det-co.component';
import { FavConfirmComponent } from '../fav-confirm/fav-confirm.component';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  @Input() commandStr: string = '';
  command: Command = {
    id: 0,
    collectionNo: 0,
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

  addFavorito(): void {
    //localStorage.setItem(this.personaje.id.toString(), this.personaje.name);
    var keys = Object.keys(localStorage);
    if(keys.includes(this.command.id.toString()))
    {
      this.dialog.open(FavConfirmComponent, {
        width      : '100%',
        maxWidth   : '600px',
        height     : 'auto',
        hasBackdrop: true,
        maxHeight  : '700px',
        data: {
          id: this.command.id,
          name: this.command.name,
          img: this.command.img
        }
      });
    }else
    {
      localStorage.setItem(this.command.id.toString(), this.command.name);
    }
  }

  parseStrJson(){
    //console.log('parseStrJson()')
    var result = JSON.parse(JSON.stringify(this.commandStr));
    var img = result['id'];
    //console.log(result);
    this.command.id = result['id'];
    this.command.collectionNo = result['collectionNo'];
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
        detail: this.command.detail,
        img: this.command.img
      }
    });
  }

}

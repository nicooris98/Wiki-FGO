import { Component, OnInit, Input } from '@angular/core';
import { Command } from 'src/app/interfaces/command';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetCoComponent } from '../det-co/det-co.component';
import { FavConfirmComponent } from '../fav-confirm/fav-confirm.component';
import { ServantService } from 'src/app/servicios/servant.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  @Input() commandStr: string = '';

  mostrar: boolean = true;

  corazon: string = 'no-fav';

  command: Command = {
    id: 0,
    collectionNo: 0,
    name: '',
    rarity: '',
    detail: '',
    img: ''
  }

  constructor(
    public dialog: MatDialog,
    private s_service: ServantService
  ) { }

  ngOnInit(): void {
    this.parseStrJson();
    var keys = Object.keys(localStorage);
    for (let index = 0; index < keys.length; index++) {
      if(keys[index]==this.command.id.toString())
      {
        this.corazon = 'fav';
      }
    }
  }

  addFavorito(): void {
    //localStorage.setItem(this.personaje.id.toString(), this.personaje.name);
    var keys = Object.keys(localStorage);
    if(keys.includes(this.command.id.toString()))
    {
      const ref = this.dialog.open(FavConfirmComponent, {
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
      ref.afterClosed().subscribe((result: boolean) => {
        if(result)
        {
          //console.log('Elimino: '+this.command.id);
          localStorage.removeItem(this.command.id.toString());
          this.corazon = 'no-fav';
          if(this.s_service.getFav())
          {
            this.mostrar = false;
          }
        }
        else
        {
          console.log('Eligio Cancelar');
        }
      });
    }else
    {
      localStorage.setItem(this.command.id.toString(), this.command.name);
      this.corazon = 'fav';
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

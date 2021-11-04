import { Component, OnInit, Input } from '@angular/core';
import { Craft } from 'src/app/interfaces/craft';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetCeComponent } from '../det-ce/det-ce.component';
import { FavConfirmComponent } from '../fav-confirm/fav-confirm.component';

@Component({
  selector: 'app-ce',
  templateUrl: './ce.component.html',
  styleUrls: ['./ce.component.css']
})
export class CeComponent implements OnInit {

  @Input() ceStr: string = '';

  mostrar: boolean = true;

  carta: Craft = {
    id: 0,
    collectionNo: 0,
    name: '',
    rarity: '',
    cost: 0,
    lvMax: 0,
    detail: '',
    img: '',
    atkMax: 0,
    hpMax: 0
  };

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.parseStrJson();
  }

  addFavorito(): void {
    //localStorage.setItem(this.personaje.id.toString(), this.personaje.name);
    var keys = Object.keys(localStorage);
    if(keys.includes(this.carta.id.toString()))
    {
      const ref = this.dialog.open(FavConfirmComponent, {
        width      : '100%',
        maxWidth   : '600px',
        height     : 'auto',
        hasBackdrop: true,
        maxHeight  : '700px',
        data: {
          id: this.carta.id,
          name: this.carta.name,
          img: this.carta.img
        }
      });
      ref.afterClosed().subscribe((result: boolean) => {
        if(result)
        {
          console.log('Elimino: '+this.carta.id);
          localStorage.removeItem(this.carta.id.toString());
          this.mostrar = false;//Deberia existir otra forma de que ande
        }
        else
        {
          console.log('Eligio Cancelar');
        }
      });
    }else
    {
      localStorage.setItem(this.carta.id.toString(), this.carta.name);
    }
  }

  parseStrJson(){
    //console.log('parseStrJson()')
    var result = JSON.parse(JSON.stringify(this.ceStr));
    var img = result['id'];
    //console.log(result);
    this.carta.id = result['id'];
    this.carta.collectionNo = result['collectionNo'];
    this.carta.name = result['name'];
    this.carta.rarity = result['rarity'];
    this.carta.cost = result['cost'];
    this.carta.lvMax = result['lvMax'];
    this.carta.atkMax = result['atkMax'];
    this.carta.hpMax = result['hpMax'];
    this.carta.detail = result['skills']['0']['detail'];
    this.carta.img = result['extraAssets']['charaGraph']['equip'][img];
  }

  verDetalle(): void {
    this.dialog.open(DetCeComponent, {
      width      : '100%',
      maxWidth   : '600px',
      height     : 'auto',
      hasBackdrop: true,
      maxHeight  : '700px',
      data: {
        name: this.carta.name,
        lvMax: this.carta.lvMax,
        atkMax: this.carta.atkMax,
        hpMax: this.carta.hpMax,
        detail: this.carta.detail,
        img: this.carta.img
      }
    });
  }

}

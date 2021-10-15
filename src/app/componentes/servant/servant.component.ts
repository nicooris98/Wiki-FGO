import { Component, OnInit, Input } from '@angular/core';
import { Servant } from 'src/app/servant';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-servant',
  templateUrl: './servant.component.html',
  styleUrls: ['./servant.component.css']
})
export class ServantComponent implements OnInit {

  @Input() servantStr: string = '';
  personaje: Servant = {
    id: 0,
    name: '',
    rarity: '',
    class: '',
    atk: 0,
    hp: 0,
    np: [],
    cards: [],
    img: ''
  };

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.parseStrJson();
  }

  parseStrJson(){
    //console.log('parseStrJson()')
    var result = JSON.parse(JSON.stringify(this.servantStr));
    //console.log(result);
    this.personaje.id = result['collectionNo'];
    this.personaje.name = result['name'];
    this.personaje.rarity = result['rarity'];
    this.personaje.class = result['className'];
    this.personaje.atk = result['atkMax'];
    this.personaje.hp = result['hpMax'];
    this.personaje.cards = result['cards'];
    this.personaje.img = result['extraAssets']['charaGraph']['ascension']['1'];
    this.personaje.np = result['noblePhantasms'];
  }

  verDetalle(): void {
    //console.log(this.personaje);
    this.dialog.open(DetalleComponent, {
      width      : '100%',
      maxWidth   : '400px',
      height     : 'auto',
      hasBackdrop: true,
      maxHeight  : '700px',
      data: {
        name: this.personaje.name,
        cards: this.personaje.cards,
        np: this.personaje.np
      }
    });
  }

}

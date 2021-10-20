import { Component, OnInit, Input } from '@angular/core';
import { Craft } from 'src/app/interfaces/craft';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetCeComponent } from '../det-ce/det-ce.component';

@Component({
  selector: 'app-ce',
  templateUrl: './ce.component.html',
  styleUrls: ['./ce.component.css']
})
export class CeComponent implements OnInit {

  @Input() ceStr: string = '';
  carta: Craft = {
    id: 0,
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

  parseStrJson(){
    //console.log('parseStrJson()')
    var result = JSON.parse(JSON.stringify(this.ceStr));
    var img = result['id'];
    //console.log(result);
    this.carta.id = result['collectionNo'];
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
        detail: this.carta.detail
      }
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Servant } from 'src/app/interfaces/servant';
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
    atkMax: 0,
    hpMax: 0,
    np: [],
    cards: [],
    img: '',
    skills: [],
    classPassive: [],
    traits: [],
    cost: 0,
    lvMax: 0,
    attribute: ''
  };

  /* currentState: string = 'initial'; */


  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.parseStrJson();
    /* console.log(this.currentState);
    this.changeState();
    console.log(this.currentState); */
  }

  /* changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  } */

  parseStrJson(){
    //console.log('parseStrJson()')
    var result = JSON.parse(JSON.stringify(this.servantStr));
    //console.log(result);
    this.personaje.id = result['collectionNo'];
    this.personaje.name = result['name'];
    this.personaje.rarity = result['rarity'];
    this.personaje.class = result['className'];
    this.personaje.atkMax = result['atkMax'];
    this.personaje.hpMax = result['hpMax'];
    this.personaje.cards = result['cards'];
    this.personaje.img = result['extraAssets']['charaGraph']['ascension']['1'];
    this.personaje.np = result['noblePhantasms'];
    this.personaje.skills = result['skills'];
    this.personaje.classPassive = result['classPassive'];
    this.personaje.traits = result['traits'];
    this.personaje.cost = result['cost'];
    this.personaje.lvMax = result['lvMax'];
    this.personaje.attribute = result['attribute'];
  }

  verDetalle(): void {
    //console.log(this.personaje);
    this.dialog.open(DetalleComponent, {
      width      : '100%',
      maxWidth   : '600px',
      height     : 'auto',
      hasBackdrop: true,
      maxHeight  : '700px',
      data: {
        name: this.personaje.name,
        cards: this.personaje.cards,
        np: this.personaje.np,
        skills: this.personaje.skills,
        atkMax: this.personaje.atkMax,
        hpMax: this.personaje.hpMax,
        classPassive: this.personaje.classPassive,
        traits: this.personaje.traits,
        cost: this.personaje.cost,
        lvMax: this.personaje.lvMax,
        attribute: this.personaje.attribute
      }
    });
  }

}

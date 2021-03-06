import { Component, OnInit, Input } from '@angular/core';
import { Servant } from 'src/app/interfaces/servant';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetalleComponent } from '../detalle/detalle.component';
import { ServantService } from 'src/app/servicios/servant.service';
import { FavConfirmComponent } from '../fav-confirm/fav-confirm.component';

@Component({
  selector: 'app-servant',
  templateUrl: './servant.component.html',
  styleUrls: ['./servant.component.css']
})
export class ServantComponent implements OnInit {

  @Input() servantStr: string = '';

  mostrar: boolean = true;
  corazon: string = 'no-fav';

  personaje: Servant = {
    id: 0,
    collectionNo: 0,
    name: '',
    rarity: '',
    class: '',
    atkMax: 0,
    hpMax: 0,
    np: [],
    cards: [],
    img: [],
    skills: [],
    classPassive: [],
    traits: [],
    cost: 0,
    lvMax: 0,
    attribute: '',
    atkGrowth: [],
    hpGrowth: []
  };

  /* currentState: string = 'initial'; */


  constructor(
    public dialog: MatDialog,
    private s_service: ServantService
  ) { }

  ngOnInit(): void {
    this.parseStrJson();
    var keys = Object.keys(localStorage);
    for (let index = 0; index < keys.length; index++) {
      if(keys[index]==this.personaje.id.toString())
      {
        this.corazon = 'fav';
      }
    }
    /* console.log(this.currentState);
    this.changeState();
    console.log(this.currentState); */
  }

  /* changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  } */

  addFavorito(): void {
    var keys = Object.keys(localStorage);
    if(keys.includes(this.personaje.id.toString()))
    {
      const ref = this.dialog.open(FavConfirmComponent, {
        width      : '100%',
        maxWidth   : '600px',
        height     : 'auto',
        hasBackdrop: true,
        maxHeight  : '700px',
        data: {
          id: this.personaje.id,
          name: this.personaje.name,
          img: this.personaje.img[1]
        }
      });
      ref.afterClosed().subscribe((result: boolean) => {
        if(result)
        {
          //console.log('Elimino: '+this.personaje.id);
          localStorage.removeItem(this.personaje.id.toString());
          this.corazon = 'no-fav';
          //this.personaje = this.personajeBlanco;
          if(this.s_service.getFav())
          {
            this.mostrar = false;//Deberia existir otra forma de que ande
          }
        }
        else
        {
          console.log('Eligio Cancelar');
        }
      });
    }else
    {
      localStorage.setItem(this.personaje.id.toString(), this.personaje.name);
      this.corazon = 'fav';
    }
    /* for (let index = 0; index < this.servant.getParaID().length; index++) {
      if(this.servant.getParaID()[index]==this.personaje.id.toString())
      {
        alert('Ya esta en favoritos');
      }else
      {
        localStorage.setItem(this.personaje.id.toString(), this.personaje.name);
      }
    } */
  }

  parseStrJson(){
    //console.log('parseStrJson()')
    var result = JSON.parse(JSON.stringify(this.servantStr));
    //console.log(result);
    this.personaje.id = result['id'];
    this.personaje.collectionNo = result['collectionNo'];
    this.personaje.name = result['name'];
    this.personaje.rarity = result['rarity'];
    this.personaje.class = result['className'];
    this.personaje.atkMax = result['atkMax'];
    this.personaje.hpMax = result['hpMax'];
    this.personaje.cards = result['cards'];
    this.personaje.img = result['extraAssets']['charaGraph']['ascension'];
    this.personaje.np = result['noblePhantasms'];
    this.personaje.skills = result['skills'];
    this.personaje.classPassive = result['classPassive'];
    this.personaje.traits = result['traits'];
    this.personaje.cost = result['cost'];
    this.personaje.lvMax = result['lvMax'];
    this.personaje.attribute = result['attribute'];
    this.personaje.atkGrowth = result['atkGrowth'];
    this.personaje.hpGrowth = result['hpGrowth'];
    /* console.log(this.personaje.atkGrowth);
    console.log(this.personaje.hpGrowth); */
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
        attribute: this.personaje.attribute,
        img: this.personaje.img,
        class: this.personaje.class,
        atkGrowth: this.personaje.atkGrowth,
        hpGrowth: this.personaje.hpGrowth
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ServantService } from 'src/app/servicios/servant.service';
import { Servant } from 'src/app/interfaces/servant';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent implements OnInit {

  personajes: Servant[] = [
    {
      id: 0,
      name: '',
      rarity: '',
      class: '',
      atkMax: 0,
      hpMax: 0,
      np: [],
      cards: [],
      img: '',
      skills: []
    },
    {
      id: 0,
      name: '',
      rarity: '',
      class: '',
      atkMax: 0,
      hpMax: 0,
      np: [],
      cards: [],
      img: '',
      skills: []
    },
    {
      id: 0,
      name: '',
      rarity: '',
      class: '',
      atkMax: 0,
      hpMax: 0,
      np: [],
      cards: [],
      img: '',
      skills: []
    },
    {
      id: 0,
      name: '',
      rarity: '',
      class: '',
      atkMax: 0,
      hpMax: 0,
      np: [],
      cards: [],
      img: '',
      skills: []
    },
    {
      id: 0,
      name: '',
      rarity: '',
      class: '',
      atkMax: 0,
      hpMax: 0,
      np: [],
      cards: [],
      img: '',
      skills: []
    },
    {
      id: 0,
      name: '',
      rarity: '',
      class: '',
      atkMax: 0,
      hpMax: 0,
      np: [],
      cards: [],
      img: '',
      skills: []
    }
  ];
  listaPer: number[] = [];
  filtro: string[] = [];
  todosServ: string[] = [];

  constructor(
    private datos: ServantService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.getTeam();
  }

  parseStrJson(serv6: string[]): void{
    //console.log('parseStrJson()')
    var result = JSON.parse(JSON.stringify(serv6));
    //console.log(result);
    //console.log(result[0]['name']);
    for (let i = 0; i < result.length; i++) {
      this.personajes[i].id = result[i]['collectionNo'];
      this.personajes[i].name = result[i]['name'];
      this.personajes[i].rarity = result[i]['rarity'];
      this.personajes[i].class = result[i]['className'];
      this.personajes[i].atkMax = result[i]['atkMax'];
      this.personajes[i].hpMax = result[i]['hpMax'];
      this.personajes[i].cards = result[i]['cards'];
      this.personajes[i].img = result[i]['extraAssets']['charaGraph']['ascension']['1'];
      this.personajes[i].np = result[i]['noblePhantasms'];
      this.personajes[i].skills = result[i]['skills'];
    }
  }

  getTeam(): void {
    this.listaPer = [];
    this.filtro = [];
    this.datos.setServant();
    this.datos
      .getListOfGroup()
      .subscribe(
        data => {
          var result = []; 
          result = JSON.parse(JSON.stringify(data));
          var cant = result.length;
          this.listaPer.push(Math.round(Math.random()*cant));
          var items = 1;
          while (items < 7) {
            var numero = Math.round(Math.random()*cant);
            if(!this.listaPer.includes(numero)){
              this.listaPer.push(numero);
              items++;
            }
          }
          this.filtro.push(result[this.listaPer[0]]);
          this.filtro.push(result[this.listaPer[1]]);
          this.filtro.push(result[this.listaPer[2]]);
          this.filtro.push(result[this.listaPer[3]]);
          this.filtro.push(result[this.listaPer[4]]);
          this.filtro.push(result[this.listaPer[5]]);
          /* console.log(this.listaPer[0]);
          console.log(this.filtro); */
          this.todosServ = this.filtro;
          this.parseStrJson(this.todosServ);
        },
        err => {
          console.log(err);
        }
    );
  }
}

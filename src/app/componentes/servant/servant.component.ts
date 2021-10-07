import { Component, OnInit, Input } from '@angular/core';
import { Servant } from 'src/app/servant';

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
    hp: 0
  };
  pruebas: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.parseStrJson();
  }

  parseStrJson(){
    Object.keys(JSON.parse(this.servantStr)).forEach(key =>{
      this.pruebas.push(key + ' - ' + JSON.parse(this.servantStr)[key]);
    });
  }

}

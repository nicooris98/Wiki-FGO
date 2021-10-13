import { Component, OnInit, Input } from '@angular/core';
import { Craft } from 'src/app/craft';

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
    img: ''
  };

  constructor() { }

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
    this.carta.detail = result['skills']['0']['detail'];
    this.carta.img = result['extraAssets']['charaGraph']['equip'][img];
  }

}

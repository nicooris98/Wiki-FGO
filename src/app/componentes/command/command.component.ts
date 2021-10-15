import { Component, OnInit, Input } from '@angular/core';
import { Command } from 'src/app/command';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  @Input() commandStr: string = '';
  command: Command = {
    id: 0,
    name: '',
    rarity: '',
    detail: '',
    img: ''
  }

  constructor() { }

  ngOnInit(): void {
    this.parseStrJson();
  }

  parseStrJson(){
    //console.log('parseStrJson()')
    var result = JSON.parse(JSON.stringify(this.commandStr));
    var img = result['id'];
    //console.log(result);
    this.command.id = result['collectionNo'];
    this.command.name = result['name'];
    this.command.rarity = result['rarity'];
    this.command.detail = result['skills']['0']['detail'];
    this.command.img = result['extraAssets']['charaGraph']['cc'][img];
  }

}

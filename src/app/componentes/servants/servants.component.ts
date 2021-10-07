import { Component, OnInit } from '@angular/core';
import { ServantService } from 'src/app/servicios/servant.service';
import { Servant } from 'src/app/servant';

@Component({
  selector: 'app-servants',
  templateUrl: './servants.component.html',
  styleUrls: ['./servants.component.css']
})
export class ServantsComponent implements OnInit {

  servants: Servant = {
    id: 0,
    name: '',
    rarity: '',
    class: '',
    atk: 0,
    hp: 0
  };
  servs: string = '';

  constructor(private personajes: ServantService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.personajes
      .getListOfGroup()
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          this.servs = JSON.stringify(data);
        },
        err => {
          console.log(err);
        }
    );
  }

}

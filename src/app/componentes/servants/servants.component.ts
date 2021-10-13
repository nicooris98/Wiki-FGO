import { Component, OnInit, Input } from '@angular/core';
import { ServantService } from 'src/app/servicios/servant.service';

@Component({
  selector: 'app-servants',
  templateUrl: './servants.component.html',
  styleUrls: ['./servants.component.css']
})
export class ServantsComponent implements OnInit {

  @Input() parametro: string = '';

  servs: string = '';
  todos: string[] = [];

  constructor(
    private personajes: ServantService
    ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.getData();
  }

  getData(){
    this.personajes
      .getListOfGroup()
      .subscribe(
        data => {
          var result = []; 
          result = JSON.parse(JSON.stringify(data));
          var filtro = [];
          for (let index = 0; index < result.length; index++) {
            //Si encuentra coincidencias las pone en el array filtro
            if(result[index]['name'].toLowerCase().includes(this.personajes.getParametro().toLowerCase()) || result[index]['className'].toLowerCase().includes(this.personajes.getParametro().toLowerCase())){
              filtro.push(result[index]);
            }
          }
          this.todos = filtro;
        },
        err => {
          console.log(err);
        }
    );
  }

}

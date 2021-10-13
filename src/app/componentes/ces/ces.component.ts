import { Component, OnInit, Input } from '@angular/core';
import { ServantService } from 'src/app/servicios/servant.service';

@Component({
  selector: 'app-ces',
  templateUrl: './ces.component.html',
  styleUrls: ['./ces.component.css']
})
export class CesComponent implements OnInit {

  @Input() parametro: string = '';

  servs: string = '';
  todos: string[] = [];

  constructor(
    private cartas: ServantService
    ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.getData();
  }

  getData(){
    this.cartas
      .getListOfGroup()
      .subscribe(
        data => {
          var result = []; 
          result = JSON.parse(JSON.stringify(data));
          var filtro = [];
          for (let index = 0; index < result.length; index++) {
            //Si encuentra coincidencias las pone en el array filtro
            if(result[index]['name'].toLowerCase().includes(this.cartas.getParametro())){
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

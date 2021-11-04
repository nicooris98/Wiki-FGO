import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ServantService } from 'src/app/servicios/servant.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-servants',
  templateUrl: './servants.component.html',
  styleUrls: ['./servants.component.css']
})
export class ServantsComponent implements OnInit {

  @Input() parametro: string = '';

  /* @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['Servants', 'Craft Essences', 'Command Codes']; */

  todosServ: string[] = [];
  todosCraft: string[] = [];
  todosComm: string[] = [];
  filtro: string[] = [];
  filtroCraft: string[] = [];
  filtroComm: string[] = [];

  page_size: number = 10;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  handlePage(e: PageEvent): void {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  constructor(
    private personajes: ServantService
    ) { }

  ngOnInit(): void {
    //this.getData();
  }

  ngOnChanges(): void {
    this.getData();
  }

  compara(index: number, result: any): boolean {
    if(this.personajes.getParaID().includes(result[index]['id'].toString()) || result[index]['name'].toLowerCase().includes(this.personajes.getParametro().toLowerCase()))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  getData(){
    //Buscar Servants
    this.filtro = [];
    this.personajes.setServant();
    this.personajes
      .getDatos()
      .subscribe(
        data => {
          var result = [];
          result = JSON.parse(JSON.stringify(data));
          //console.log(this.personajes.getParaID());
          for (let index = 0; index < result.length; index++) {
            //Si encuentra coincidencias las pone en el array filtro
            //console.log(result[index]['id'].toString());
            if(this.compara(index, result) || result[index]['className'].toLowerCase().includes(this.personajes.getParametro().toLowerCase())){
              this.filtro.push(result[index]);
              /* console.log(this.personajes.getParaID());
              console.log('Result: '+result[index]['id'].toString()); */
              //console.log('Entro');
            }
          }
          this.todosServ = this.filtro;
        },
        err => {
          console.log(err);
        }
    );
    //Buscar Craft Essences
    this.personajes.setCraft();
    this.filtroCraft = [];
    this.personajes
      .getDatos()
      .subscribe(
        data => {
          var result = [];
          result = JSON.parse(JSON.stringify(data));
          for (let index = 0; index < result.length; index++) {
            //Si encuentra coincidencias las pone en el array filtro
            if(this.compara(index, result)){
              this.filtroCraft.push(result[index]);
            }
          }
          this.todosCraft = this.filtroCraft;
        },
        err => {
          console.log(err);
        }
    );
    //Buscar Command Codes
    this.personajes.setCommand();
    this.filtroComm = [];
    this.personajes
      .getDatos()
      .subscribe(
        data => {
          var result = [];
          result = JSON.parse(JSON.stringify(data));
          for (let index = 0; index < result.length; index++) {
            //Si encuentra coincidencias las pone en el array filtro
            if(this.compara(index, result)){
              this.filtroComm.push(result[index]);
            }
          }
          this.todosComm = this.filtroComm;
        },
        err => {
          console.log(err);
        }
    );
  }

}

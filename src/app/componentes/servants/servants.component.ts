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
    this.getData();
  }

  ngOnChanges(): void{
    this.getData();
  }

  getData(){
    //Buscar Servants
    this.filtro = [];
    this.personajes.setServant();
    this.personajes
      .getListOfGroup()
      .subscribe(
        data => {
          var result = [];
          result = JSON.parse(JSON.stringify(data));
          for (let index = 0; index < result.length; index++) {
            //Si encuentra coincidencias las pone en el array filtro
            if(result[index]['name'].toLowerCase().includes(this.personajes.getParametro().toLowerCase()) || result[index]['className'].toLowerCase().includes(this.personajes.getParametro().toLowerCase())){
              this.filtro.push(result[index]);
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
      .getListOfGroup()
      .subscribe(
        data => {
          var result = [];
          result = JSON.parse(JSON.stringify(data));
          for (let index = 0; index < result.length; index++) {
            //Si encuentra coincidencias las pone en el array filtro
            if(result[index]['name'].toLowerCase().includes(this.personajes.getParametro().toLowerCase())){
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
      .getListOfGroup()
      .subscribe(
        data => {
          var result = [];
          result = JSON.parse(JSON.stringify(data));
          for (let index = 0; index < result.length; index++) {
            //Si encuentra coincidencias las pone en el array filtro
            if(result[index]['name'].toLowerCase().includes(this.personajes.getParametro().toLowerCase())){
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

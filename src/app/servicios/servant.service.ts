import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ServantService {

  //servantData = 'https://raw.githubusercontent.com/WeebMogul/FGO-Wikia-Servant-Extractor/master/Total%20Servant%20Database.csv';
  //servantData = 'https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json';
  private servantData: string = 'https://api.atlasacademy.io/export/NA/nice_servant.json';//cant: 268
  private craftData: string = 'https://api.atlasacademy.io/export/NA/nice_equip.json';//cant: 1112
  private commandData: string = 'https://api.atlasacademy.io/export/NA/nice_command_code.json';//cant: 51
  private data: string = '';
  private parametro: string = '';
  private paraID: string[] = [];
  private estaFav: boolean = false;

  constructor(private http: HttpClient) { }

  entroFav(): void {
    this.estaFav = true;
  }

  salioFav(): void {
    this.estaFav = false;
  }

  getFav(): boolean {
    return this.estaFav;
  }

  setParametro(valor: string): void{
    this.parametro = valor;
  }

  setParaID(valor: string): void {
    this.paraID.push(valor);
  }

  getParametro(): string{
    return this.parametro;
  }

  getParaID(): string[] {
    return this.paraID;
  }

  clearParaID(): void {
    this.paraID = [];
  }

  setServant(): void{
    this.data = this.servantData;
  }

  setCraft(): void{
    this.data = this.craftData;
  }

  setCommand(): void{
    this.data = this.commandData;
  }

  public getDatos(): Observable<any> {
    return this.http.get(this.data);
  }

}

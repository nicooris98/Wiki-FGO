import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "text/plain"})
};

@Injectable({
  providedIn: 'root'
})

export class ServantService {

  //servantData = 'https://raw.githubusercontent.com/WeebMogul/FGO-Wikia-Servant-Extractor/master/Total%20Servant%20Database.csv';
  //servantData = 'https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json';
  servantData: string = 'https://api.atlasacademy.io/export/NA/nice_servant.json';
  craftData: string = 'https://api.atlasacademy.io/export/NA/nice_equip.json';
  commandData: string = 'https://api.atlasacademy.io/export/NA/nice_command_code.json';
  data: string = '';
  parametro: string = '';
  paraID: string[] = [];

  constructor(private http: HttpClient) { }

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

  /**
   * Function to handle error when the server return an error
   *
   *
   */
  //@param error
  /*  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  } */

  /**
   * Function to extract the data when the server return some
   *
   *
   */
  //@param res
  /* private extractData(res: any) {
    let body = res;
    return body || {};
  } */

  /**
   * Function to GET what you want
   *
   *
   */
  /* public getListOfGroup(): Observable<any> {

    // Call the http GET
    return this.http.get(this.data, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  } */
}

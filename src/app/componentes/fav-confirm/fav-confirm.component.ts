import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-fav-confirm',
  templateUrl: './fav-confirm.component.html',
  styleUrls: ['./fav-confirm.component.css']
})
export class FavConfirmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  /* deleteFav(id: string): void {
    localStorage.removeItem(id);
    // return true
    // dismiss
    //window.location.reload();
  } */

  cancel(): boolean {
    return false;
  }

  delete(): boolean {
    return true;
  }

}

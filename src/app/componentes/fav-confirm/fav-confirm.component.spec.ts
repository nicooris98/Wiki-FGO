import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavConfirmComponent } from './fav-confirm.component';

describe('FavConfirmComponent', () => {
  let component: FavConfirmComponent;
  let fixture: ComponentFixture<FavConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

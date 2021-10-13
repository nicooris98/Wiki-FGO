import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorCoComponent } from './buscador-co.component';

describe('BuscadorCoComponent', () => {
  let component: BuscadorCoComponent;
  let fixture: ComponentFixture<BuscadorCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorCoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

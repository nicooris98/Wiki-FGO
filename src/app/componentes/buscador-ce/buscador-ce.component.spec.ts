import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorCeComponent } from './buscador-ce.component';

describe('BuscadorCeComponent', () => {
  let component: BuscadorCeComponent;
  let fixture: ComponentFixture<BuscadorCeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorCeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

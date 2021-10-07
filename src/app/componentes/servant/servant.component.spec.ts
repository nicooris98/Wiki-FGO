import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServantComponent } from './servant.component';

describe('ServantComponent', () => {
  let component: ServantComponent;
  let fixture: ComponentFixture<ServantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

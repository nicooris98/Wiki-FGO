import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetCoComponent } from './det-co.component';

describe('DetCoComponent', () => {
  let component: DetCoComponent;
  let fixture: ComponentFixture<DetCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetCoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetCeComponent } from './det-ce.component';

describe('DetCeComponent', () => {
  let component: DetCeComponent;
  let fixture: ComponentFixture<DetCeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetCeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

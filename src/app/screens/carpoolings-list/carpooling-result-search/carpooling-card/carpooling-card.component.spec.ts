import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingCardComponent } from './carpooling-card.component';

describe('CarpoolingCardComponent', () => {
  let component: CarpoolingCardComponent;
  let fixture: ComponentFixture<CarpoolingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

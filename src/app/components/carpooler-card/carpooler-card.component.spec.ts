import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolerCardComponent } from './carpooler-card.component';

describe('CarpoolerCardComponent', () => {
  let component: CarpoolerCardComponent;
  let fixture: ComponentFixture<CarpoolerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

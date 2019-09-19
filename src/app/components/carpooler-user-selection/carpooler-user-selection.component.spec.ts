import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolerUserSelectionComponent } from './carpooler-user-selection.component';

describe('CarpoolerUserSelectionComponent', () => {
  let component: CarpoolerUserSelectionComponent;
  let fixture: ComponentFixture<CarpoolerUserSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolerUserSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolerUserSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingCreateComponent } from './carpooling-create.component';

describe('CarpoolingCreateComponent', () => {
  let component: CarpoolingCreateComponent;
  let fixture: ComponentFixture<CarpoolingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingItemComponent } from './carpooling-item.component';

describe('CarpoolingItemComponent', () => {
  let component: CarpoolingItemComponent;
  let fixture: ComponentFixture<CarpoolingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

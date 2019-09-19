import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingListLeftMenuComponent } from './carpooling-list-left-menu.component';

describe('CarpoolingListLeftMenuComponent', () => {
  let component: CarpoolingListLeftMenuComponent;
  let fixture: ComponentFixture<CarpoolingListLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolingListLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolingListLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

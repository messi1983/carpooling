import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingsListComponent } from './carpoolings-list.component';

describe('CarpoolingsListComponent', () => {
  let component: CarpoolingsListComponent;
  let fixture: ComponentFixture<CarpoolingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

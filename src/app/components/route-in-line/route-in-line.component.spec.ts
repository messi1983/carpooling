import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteInLineComponent } from './route-in-line.component';

describe('RouteInLineComponent', () => {
  let component: RouteInLineComponent;
  let fixture: ComponentFixture<RouteInLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteInLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteInLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

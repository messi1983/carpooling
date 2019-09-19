import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesDispoComponent } from './places-dispo.component';

describe('PlacesDispoComponent', () => {
  let component: PlacesDispoComponent;
  let fixture: ComponentFixture<PlacesDispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesDispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

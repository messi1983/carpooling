import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPassengerItemComponent } from './app-passenger-item.component';

describe('AppPassengerItemComponent', () => {
  let component: AppPassengerItemComponent;
  let fixture: ComponentFixture<AppPassengerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPassengerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPassengerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

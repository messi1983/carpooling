import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResPropItemComponent } from './res-prop-item.component';

describe('ResPropItemComponent', () => {
  let component: ResPropItemComponent;
  let fixture: ComponentFixture<ResPropItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResPropItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResPropItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

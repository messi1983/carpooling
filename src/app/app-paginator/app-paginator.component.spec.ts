import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPaginatorComponent } from './app-paginator.component';

describe('AppPaginatorComponent', () => {
  let component: AppPaginatorComponent;
  let fixture: ComponentFixture<AppPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

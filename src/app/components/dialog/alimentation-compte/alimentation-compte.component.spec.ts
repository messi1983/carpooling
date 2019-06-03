import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovDialogComponent } from './approv-dialog.component';

describe('ApprovDialogComponent', () => {
  let component: ApprovDialogComponent;
  let fixture: ComponentFixture<ApprovDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAcceptanceCpDialogComponent } from './auto-acceptance-cp-dialog.component';

describe('AutoAcceptanceCpDialogComponent', () => {
  let component: AutoAcceptanceCpDialogComponent;
  let fixture: ComponentFixture<AutoAcceptanceCpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoAcceptanceCpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoAcceptanceCpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

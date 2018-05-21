import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovInfosBarreComponent } from './cov-infos-barre.component';

describe('CovInfosBarreComponent', () => {
  let component: CovInfosBarreComponent;
  let fixture: ComponentFixture<CovInfosBarreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovInfosBarreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovInfosBarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TrajetsPanelComponent } from "./trajets-panel.component";

describe("TrajetsPanelComponent", () => {
  let component: TrajetsPanelComponent;
  let fixture: ComponentFixture<TrajetsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrajetsPanelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

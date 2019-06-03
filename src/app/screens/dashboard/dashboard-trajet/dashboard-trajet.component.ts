import { Component, OnInit, Input } from "@angular/core";

import { DashboardModel } from "../model/dashboard.model";

@Component({
  selector: "dashboard-trajet",
  templateUrl: "./dashboard-trajet.component.html",
  styleUrls: ["./dashboard-trajet.component.css"]
})
export class DashboardTrajetComponent implements OnInit {
  @Input() context: DashboardModel;

  constructor() {}

  ngOnInit() {}

  onPageChange(pageId: number): void {
    this.context.currentPage = pageId;
  }
}

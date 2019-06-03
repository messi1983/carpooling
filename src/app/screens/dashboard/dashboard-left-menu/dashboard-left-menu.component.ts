import { Component, OnInit, Input } from "@angular/core";

import { DashboardModel } from "../model/dashboard.model";

@Component({
  selector: "dashboard-left-menu",
  templateUrl: "./dashboard-left-menu.component.html",
  styleUrls: ["./dashboard-left-menu.component.css"]
})
export class DashboardLeftMenuComponent implements OnInit {
  @Input() context: DashboardModel;

  constructor() {}

  ngOnInit() {}

  onPageChange(pageId: number): void {
    this.context.currentPage = pageId;
  }
}

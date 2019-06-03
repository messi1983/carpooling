import { Component, OnInit } from "@angular/core";

import { DashboardModel } from "./model/dashboard.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  context: DashboardModel = { currentPage: 1 };

  constructor() {}

  ngOnInit() {}
}

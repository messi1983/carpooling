import { Component, Input, OnInit } from "@angular/core";
import { Carpooler } from "app/model/carpooler";

@Component({
  selector: "driver-info",
  templateUrl: "./driver-info.component.html",
  styleUrls: ["./driver-info.component.css"]
})
export class DriverInfoComponent implements OnInit {
  @Input() driver: Carpooler;
  @Input() mini: boolean = false;

  constructor() {}

  ngOnInit() {}
}

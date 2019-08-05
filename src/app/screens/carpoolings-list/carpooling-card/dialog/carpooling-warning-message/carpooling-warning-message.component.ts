import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "warning-message",
  templateUrl: "./carpooling-warning-message.component.html",
  styleUrls: ["./carpooling-warning-message.component.css"]
})
export class CarpoolingWarningMessageComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}
}

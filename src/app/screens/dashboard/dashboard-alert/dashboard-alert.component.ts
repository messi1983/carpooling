import { Component, OnInit, Input } from "@angular/core";
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: "dashboard-alert",
  templateUrl: "./dashboard-alert.component.html",
  styleUrls: ["./dashboard-alert.component.css"]
})
export class DashboardAlertComponent implements OnInit {
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];

  constructor() {}

  ngOnInit() {}
}

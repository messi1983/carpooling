import { Component, OnInit, Input } from "@angular/core";

import { CarpoolingChartService } from "app/service/carpooling.chart.service";
import { Chart } from "chart.js";

@Component({
  selector: "create-left-menu",
  templateUrl: "./carpooling-create-left-menu.component.html",
  styleUrls: ["./carpooling-create-left-menu.component.css"]
})
export class CarpoolingCreateLeftMenuComponent implements OnInit {
  @Input() currentStep: number;
  @Input() doNotUseTraffic: any;

  chart: any[] = [];
  showGraffic: boolean = false;

  constructor(private _carpoolingChartService: CarpoolingChartService) {}

  loadTrafficGraph(): void {
    this.showGraffic = !this.showGraffic;
    if (this.showGraffic) {
      this.loadGraph();
    }
  }

  ngOnInit() {}

  loadGraph() {
    this._carpoolingChartService.dailyForecast().subscribe(res => {
      let temp = res["list"].map(res => res.temp);
      let alldates = res["list"].map(res => res.dt);

      let weatherDates = [];
      alldates.forEach(res => {
        weatherDates.push("02");
      });

      this.chart = new Chart("canvas", {
        type: "line",
        data: {
          labels: weatherDates,
          datasets: [
            {
              data: temp,
              borderColor: "#3cba9f",
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      });
    });
  }
}

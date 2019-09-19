import { Component, OnInit, Input } from "@angular/core";

import { DashboardModel } from "../model/dashboard.model";

@Component({
  selector: "dashboard-profil",
  templateUrl: "./dashboard-profil.component.html",
  styleUrls: ["../dashboard.component.css", "./dashboard-profil.component.css"]
})
export class DashboardProfilComponent implements OnInit {
  editForm: boolean = false;
  selectedSexe: string = "M";
  url: string = "http://placehold.it/180";

  constructor() {}

  ngOnInit() {}

  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}

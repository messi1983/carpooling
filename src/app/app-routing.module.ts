import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./screens/dashboard/dashboard.component";
import { CarpoolingSearchComponent } from "./screens/carpooling-search/carpooling-search.component";
import { CarpoolingCreateComponent } from "./screens/carpooling-create/carpooling-create.component";
import { CarpoolingUserSelectionComponent } from "./components/carpooling-user-selection/carpooling-user-selection.component";
import { CarpoolingsListComponent } from "./screens/carpoolings-list/carpoolings-list.component";
import { PageNotFoundComponent } from "./screens/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "search", component: CarpoolingSearchComponent },
  { path: "create", component: CarpoolingCreateComponent },
  { path: "resultSearch", component: CarpoolingsListComponent },
  { path: "selection", component: CarpoolingUserSelectionComponent },
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

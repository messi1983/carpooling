import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppBootstrapModule } from ".//app-bootstrap.module";
import { AppExternalModule } from ".//app-external.module";
import { AppMaterialModule } from ".//app-material.module";
import { AppRoutingModule } from ".//app-routing.module";

import { AppComponent } from "./app.component";
import { AppNavbarComponent } from "./components/app-navbar/app-navbar.component";
import { CarpoolingsListComponent } from "./screens/carpoolings-list/carpoolings-list.component";
import { CarpoolingCardComponent } from "./components/carpooling-card/carpooling-card.component";
import { CarpoolingSearchComponent } from "./screens/carpooling-search/carpooling-search.component";
import { CarpoolingUserSelectionComponent } from "./components/carpooling-user-selection/carpooling-user-selection.component";
import { DriverInfoComponent } from "./components/driver-info/driver-info.component";
import { RouteDetailComponent } from "./components/route-detail/route-detail.component";
import { PlacesDispoComponent } from "./components/places-dispo/places-dispo.component";
import { CovInfosBarreComponent } from "./components/cov-infos-barre/cov-infos-barre.component";
import { PageNotFoundComponent } from "./screens/page-not-found/page-not-found.component";
import { CarpoolingResultSearchComponent } from "./components/carpooling-result-search/carpooling-result-search.component";
import { CarpoolingsListLeftMenuComponent } from "./screens/carpoolings-list/carpoolings-list-left-menu/carpoolings-list-left-menu.component";
import { CarpoolingWarningMessageComponent } from "./components/carpooling-warning-message/carpooling-warning-message.component";
import { CarpoolingDetailComponent } from "./components/carpooling-detail/carpooling-detail.component";
import { RouteInLineComponent } from "./components/route-in-line/route-in-line.component";
import { AppPassengerItemComponent } from "./components/passenger-item/app-passenger-item.component";
import { RouteMapComponent } from "./components/route-map/route-map.component";
import { SendingDemandsComponent } from "./components/sending-demands/sending-demands.component";
import { AlimentationCompteComponent } from "./components/alimentation-compte/alimentation-compte.component";
import { CarpoolingFormComponent } from "./components/carpooling-form/carpooling-form.component";
import { CarpoolingCreateComponent } from "./screens/carpooling-create/carpooling-create.component";
import { CarpoolerCardComponent } from "./components/carpooler-card/carpooler-card.component";

import { CarpoolerService } from "./service/carpooler.service";
import { CarpoolerViewModelService } from "./service/carpooler.view.model.service";
import { CarpoolingChartService } from "./service/carpooling.chart.service";
import { CarpoolingService } from "./service/carpooling.service";
import { CarpoolingCreateLeftMenuComponent } from "./screens/carpooling-create/carpooling-create-left-menu/carpooling-create-left-menu.component";
import { CarpoolerUserSelectionComponent } from "./components/carpooler-user-selection/carpooler-user-selection.component";
import { DashboardComponent } from "./screens/dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CarpoolingsListComponent,
    CarpoolingCardComponent,
    CarpoolingSearchComponent,
    CarpoolingUserSelectionComponent,
    DriverInfoComponent,
    RouteDetailComponent,
    PlacesDispoComponent,
    CovInfosBarreComponent,
    PageNotFoundComponent,
    CarpoolingResultSearchComponent,
    CarpoolingsListLeftMenuComponent,
    CarpoolingWarningMessageComponent,
    CarpoolingDetailComponent,
    RouteInLineComponent,
    AppPassengerItemComponent,
    RouteMapComponent,
    SendingDemandsComponent,
    AlimentationCompteComponent,
    CarpoolingFormComponent,
    CarpoolingCreateComponent,
    CarpoolerCardComponent,
    CarpoolingCreateLeftMenuComponent,
    CarpoolerUserSelectionComponent,
    DashboardComponent
  ],
  imports: [
    HttpModule,
    AppBootstrapModule,
    AppExternalModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [
    CarpoolingChartService,
    CarpoolingService,
    CarpoolerService,
    CarpoolerViewModelService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CarpoolingWarningMessageComponent,
    CarpoolingDetailComponent,
    RouteMapComponent,
    AlimentationCompteComponent,
    CarpoolerUserSelectionComponent
  ]
})
export class AppModule {}

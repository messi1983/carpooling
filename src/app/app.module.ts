import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppBootstrapModule } from ".//app-bootstrap.module";
import { AppExternalModule } from ".//app-external.module";
import { AppMaterialModule } from ".//app-material.module";
import { AppRoutingModule } from ".//app-routing.module";

import { AppComponent } from "./app.component";
import { AppNavbarComponent } from "./components/app-navbar/app-navbar.component";
import { CarpoolingsListComponent } from "./screens/carpoolings-list/carpoolings-list.component";
import { CarpoolingSearchComponent } from "./screens/carpooling-search/carpooling-search.component";
import { CarpoolingUserSelectionComponent } from "./screens/carpoolings-list/carpooling-user-selection/carpooling-user-selection.component";
import { DriverInfoComponent } from "./components/driver-info/driver-info.component";
import { RouteComponent } from "./components/route/route.component";
import { PlacesDispoComponent } from "./components/places-dispo/places-dispo.component";
import { CovInfosBarreComponent } from "./components/cov-infos-barre/cov-infos-barre.component";
import { CarpoolingWarningMessageComponent } from "./screens/carpoolings-list/carpooling-card/dialog/carpooling-warning-message/carpooling-warning-message.component";
import { CarpoolingDetailComponent } from "./components/dialog/carpooling-detail/carpooling-detail.component";
import { ConfirmationComponent } from "./components/dialog/confirmation/confirmation.component";
import { AppPassengerItemComponent } from "./components/passenger-item/app-passenger-item.component";
import { RouteMapComponent } from "./components/dialog/route-map/route-map.component";
import { SendingDemandsComponent } from "./screens/carpoolings-list/sending-demands/sending-demands.component";
import { AlimentationCompteComponent } from "./components/dialog/alimentation-compte/alimentation-compte.component";
import { CarpoolingFormComponent } from "./components/carpooling-form/carpooling-form.component";
import { CarpoolingCreateComponent } from "./screens/carpooling-create/carpooling-create.component";
import { CarpoolingCreateLeftMenuComponent } from "./screens/carpooling-create/carpooling-create-left-menu/carpooling-create-left-menu.component";
import { CarpoolerCardComponent } from "./components/carpooler-card/carpooler-card.component";
import { CarpoolerUserSelectionComponent } from "./components/carpooler-user-selection/carpooler-user-selection.component";
import { PageNotFoundComponent } from "./screens/page-not-found/page-not-found.component";
import { CarpoolingsListLeftMenuComponent } from "./screens/carpoolings-list/carpoolings-list-left-menu/carpoolings-list-left-menu.component";
import { CarpoolingCardComponent } from "./screens/carpoolings-list/carpooling-card/carpooling-card.component";
import { DashboardLeftMenuComponent } from "./screens/dashboard/dashboard-left-menu/dashboard-left-menu.component";
import { DashboardProfilComponent } from "./screens/dashboard/dashboard-profil/dashboard-profil.component";
import { DashboardTrajetComponent } from "./screens/dashboard/dashboard-trajet/dashboard-trajet.component";
import { DashboardAvisComponent } from "./screens/dashboard/dashboard-avis/dashboard-avis.component";
import { DashboardVehicleComponent } from "./screens/dashboard/dashboard-vehicle/dashboard-vehicle.component";
import { DashboardAlertComponent } from "./screens/dashboard/dashboard-alert/dashboard-alert.component";
import { DashboardMessageComponent } from "./screens/dashboard/dashboard-message/dashboard-message.component";
import { DashboardFriendComponent } from "./screens/dashboard/dashboard-friend/dashboard-friend.component";
import { DashboardAccountComponent } from "./screens/dashboard/dashboard-account/dashboard-account.component";
import { DashboardComponent } from "./screens/dashboard/dashboard.component";

import { CreateVehiculeComponent } from "./screens/dashboard/dashboard-vehicle/dialog/create-vehicule/create-vehicule.component";
import { ReservationsPanelComponent } from "./screens/dashboard/dashboard-trajet/reservations-panel/reservations-panel.component";
import { PropositionsPanelComponent } from "./screens/dashboard/dashboard-trajet/propositions-panel/propositions-panel.component";
import { PublicationsPanelComponent } from "./screens/dashboard/dashboard-trajet/publications-panel/publications-panel.component";
import { TrajetsPanelComponent } from "./screens/dashboard/dashboard-trajet/trajets-panel/trajets-panel.component";
import { CarpoolingItemComponent } from "./components/carpooling-item/carpooling-item.component";
import { ResPropItemComponent } from './components/res-prop-item/res-prop-item.component';

import { CarpoolerService } from "./service/carpooler.service";
import { CarpoolerViewModelService } from "./service/carpooler.view.model.service";
import { CarpoolingChartService } from "./service/carpooling.chart.service";
import { CarpoolingService } from "./service/carpooling.service";
import { ReservationService } from "./service/reservation.service";

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CarpoolingsListComponent,
    CarpoolingCardComponent,
    CarpoolingSearchComponent,
    CarpoolingUserSelectionComponent,
    DriverInfoComponent,
    RouteComponent,
    PlacesDispoComponent,
    CovInfosBarreComponent,
    PageNotFoundComponent,
    CarpoolingsListLeftMenuComponent,
    CarpoolingWarningMessageComponent,
    CarpoolingDetailComponent,
    AppPassengerItemComponent,
    RouteMapComponent,
    SendingDemandsComponent,
    AlimentationCompteComponent,
    CarpoolingFormComponent,
    CarpoolingCreateComponent,
    CarpoolerCardComponent,
    CarpoolingCreateLeftMenuComponent,
    CarpoolerUserSelectionComponent,
    DashboardComponent,
    DashboardLeftMenuComponent,
    DashboardProfilComponent,
    DashboardTrajetComponent,
    DashboardAvisComponent,
    DashboardAlertComponent,
    DashboardVehicleComponent,
    DashboardMessageComponent,
    DashboardFriendComponent,
    DashboardAccountComponent,
    CreateVehiculeComponent,
    ConfirmationComponent,
    ReservationsPanelComponent,
    PropositionsPanelComponent,
    CarpoolingItemComponent,
    PublicationsPanelComponent,
    TrajetsPanelComponent,
    ResPropItemComponent
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
    ReservationService,
    CarpoolerViewModelService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CarpoolingWarningMessageComponent,
    CarpoolingDetailComponent,
    RouteMapComponent,
    AlimentationCompteComponent,
    CarpoolerUserSelectionComponent,
    CreateVehiculeComponent,
    ConfirmationComponent
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppBootstrapModule } from './/app-bootstrap.module';
import { AppExternalModule } from './/app-external.module';
import { AppMaterialModule } from './/app-material.module';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { CarpoolingsListComponent } from './components/carpoolings-list/carpoolings-list.component';
import { CarpoolingCardComponent } from './components/carpoolings-list/carpooling-card/carpooling-card.component';
import { CarpoolingSearchComponent } from './components/carpooling-search/carpooling-search.component';
import { UserSelectionComponent } from './components/carpoolings-list/user-selection/user-selection.component';
import { DriverInfoComponent } from './components/driver-info/driver-info.component';
import { RouteDetailComponent } from './components/route-detail/route-detail.component';
import { PlacesDispoComponent } from './components/places-dispo/places-dispo.component';
import { CovInfosBarreComponent } from './components/cov-infos-barre/cov-infos-barre.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResultSearchComponent } from './components/carpoolings-list/result-search/result-search.component';
import { CarpoolingListLeftMenuComponent } from './components/carpoolings-list/carpooling-list-left-menu/carpooling-list-left-menu.component';
import { AutoAcceptanceCpDialogComponent } from './dialogboxes/auto-acceptance-cp-dialog/auto-acceptance-cp-dialog.component';
import { DetailDialogComponent } from './dialogboxes/detail-dialog/detail-dialog.component';
import { RouteInLineComponent } from './components/route-in-line/route-in-line.component';
import { AppPassengerItemComponent } from './components/passenger-item/app-passenger-item.component';
import { MapDialogComponent } from './dialogboxes/map-dialog/map-dialog.component';
import { PaiementComponent } from './components/carpoolings-list/paiement/paiement.component';
import { ApprovDialogComponent } from './approv-dialog/approv-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CarpoolingsListComponent,
    CarpoolingCardComponent,
    CarpoolingSearchComponent,
    UserSelectionComponent,
    DriverInfoComponent,
    RouteDetailComponent,
    PlacesDispoComponent,
    CovInfosBarreComponent,
    PageNotFoundComponent,
    ResultSearchComponent,
    CarpoolingListLeftMenuComponent,
    AutoAcceptanceCpDialogComponent,
    DetailDialogComponent,
    RouteInLineComponent,
    AppPassengerItemComponent,
    MapDialogComponent,
    PaiementComponent,
    ApprovDialogComponent,
  ],
  imports: [
    HttpModule,
    AppBootstrapModule,
    AppExternalModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [
    AutoAcceptanceCpDialogComponent,
    DetailDialogComponent,
    MapDialogComponent
  ]
})
export class AppModule { }

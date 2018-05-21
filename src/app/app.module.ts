import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppBootstrapModule } from './/app-bootstrap.module';
import { AppMaterialModule } from './/app-material.module';
import { AppFirebaseModule } from './/app-firebase-module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CarpoolingsListComponent } from './carpoolings-list/carpoolings-list.component';
import { CarpoolingCardComponent, AutoAcceptanceCarpoolingDialog } from './carpooling-card/carpooling-card.component';
import { CarpoolingSearchComponent } from './carpooling-search/carpooling-search.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { DriverInfoComponent } from './driver-info/driver-info.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { PlacesDispoComponent } from './places-dispo/places-dispo.component';
import { CovInfosBarreComponent } from './cov-infos-barre/cov-infos-barre.component';

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
    AutoAcceptanceCarpoolingDialog,
  ],
  imports: [
    HttpModule,
    AppFirebaseModule,
    AppBootstrapModule,
    AppMaterialModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [
    AutoAcceptanceCarpoolingDialog
  ]
})
export class AppModule { }

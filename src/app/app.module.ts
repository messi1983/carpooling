import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBootstrapModule } from './/app-bootstrap.module';
import { AppMaterialModule } from './/app-material.module';
import { AppFirebaseModule } from './/app-firebase-module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CarpoolingsListComponent } from './carpoolings-list/carpoolings-list.component';
import { CarpoolingCardComponent } from './carpooling-card/carpooling-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CarpoolingsListComponent,
    CarpoolingCardComponent
  ],
  imports: [
    BrowserModule,
    AppFirebaseModule,
    AppBootstrapModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

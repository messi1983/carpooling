import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppFirebaseModule } from './/app-firebase-module';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppBootstrapModule } from './/app-bootstrap.module';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppFirebaseModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

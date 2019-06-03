import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatNativeDateModule } from "@angular/material";
import { MatChipsModule } from "@angular/material/chips";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatStepperModule } from "@angular/material/stepper";
import { MatListModule } from "@angular/material/list";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  imports: [
    BrowserModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatRadioModule,
    MatChipsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatDialogModule,
    MatStepperModule,
    MatListModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDividerModule
  ],
  exports: [
    BrowserModule,
    MatNativeDateModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatRadioModule,
    MatChipsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatDialogModule,
    MatStepperModule,
    MatListModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDividerModule
  ],
  declarations: []
})
export class AppMaterialModule {}

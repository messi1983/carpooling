import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
      imports: [
        BrowserModule,
        MatNativeDateModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule ,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatInputModule,
        MatRadioModule,
        MatChipsModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatDatepickerModule
      ],
      exports: [
        BrowserModule,
        MatNativeDateModule,
        FormsModule,
        BrowserAnimationsModule ,
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
        MatDatepickerModule
      ],
      declarations: []
})
export class AppMaterialModule { }

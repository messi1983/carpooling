import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
      imports: [
       BrowserAnimationsModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatCheckboxModule
      ],
      exports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatCheckboxModule
      ],
      declarations: []
})
export class AppMaterialModule { }

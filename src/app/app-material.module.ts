import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
      imports: [
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatCheckboxModule
      ],
      exports: [
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatCheckboxModule
      ],
      declarations: []
})
export class AppMaterialModule { }

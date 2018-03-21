import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
      imports: [
         TabsModule.forRoot(),
         BsDatepickerModule.forRoot(),
         PaginationModule.forRoot()
      ],
      exports: [
        TabsModule,
         BsDatepickerModule,
         PaginationModule
      ],
      declarations: []
})
export class AppBootstrapModule { }

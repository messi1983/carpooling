import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
      imports: [
        TabsModule.forRoot(),
        AlertModule.forRoot(),
        BsDatepickerModule.forRoot(),
        PaginationModule.forRoot(),
      ],
      exports: [
        TabsModule,
        AlertModule,
        BsDatepickerModule,
        PaginationModule
      ],
      declarations: []
})
export class AppBootstrapModule { }

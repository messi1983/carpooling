import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
      imports: [
        TabsModule.forRoot(),
         PaginationModule.forRoot()
      ],
      exports: [
        TabsModule, 
         PaginationModule
      ],
      declarations: []
})
export class AppBootstrapModule { }

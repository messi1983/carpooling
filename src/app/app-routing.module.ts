import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarpoolingSearchComponent } from './carpooling-search/carpooling-search.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { CarpoolingsListComponent } from './carpoolings-list/carpoolings-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'search', component: CarpoolingSearchComponent },
    { path: 'resultSearch', component: CarpoolingsListComponent },
    { path: 'selection', component: UserSelectionComponent },
    { path: '',   redirectTo: '/search', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

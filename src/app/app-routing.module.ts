import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarpoolingSearchComponent } from './components/carpooling-search/carpooling-search.component';
import { UserSelectionComponent } from './components/carpoolings-list/user-selection/user-selection.component';
import { CarpoolingsListComponent } from './components/carpoolings-list/carpoolings-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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

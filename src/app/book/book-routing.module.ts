import { ConfirmCanDeactivateGuard } from './shared/confirm-can-deactivate.guard';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Route[] = [{
  path: '',
  component: BookDashboardComponent,
  children: [{
    path: '',
    component: BookListComponent
  }, {
    path: ':isbn',
    component: BookDetailsComponent,
    canDeactivate: [ConfirmCanDeactivateGuard]
  }, {
    path: 'edit/:isbn',
    component: BookEditComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ConfirmCanDeactivateGuard]
})
export class BookRoutingModule {}

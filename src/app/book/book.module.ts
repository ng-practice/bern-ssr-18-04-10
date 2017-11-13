import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { BookDataService } from './core/book-data.service';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  ],
  declarations: [BookListComponent, BookDetailsComponent, BookDashboardComponent, BookEditComponent],
  exports: [BookListComponent],
  providers: [BookDataService]
})
export class BookModule { }

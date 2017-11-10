import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, switchMap } from 'rxjs/operators';

import { BookDataService } from '../core/book-data.service';
import { Book } from '../models/book';
import { emptyBook } from '../shared/provide-empty-book';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  book = emptyBook();

  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => params.isbn),
      switchMap(isbn => this.bookData.getBookByIsbn(isbn))
    )
    .subscribe(book => this.book = book);
  }

}

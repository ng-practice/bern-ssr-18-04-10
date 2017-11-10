import { BookDataService } from '../core/book-data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { map, switchMap } from 'rxjs/operators';
import { Book } from '../models/book';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  failure: string;

  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => params.isbn),
      switchMap(isbn => this.bookData.getBookByIsbn(isbn))
    )
    .subscribe(
      book => this.book = book,
      err => this.failure = err.message);
  }
}

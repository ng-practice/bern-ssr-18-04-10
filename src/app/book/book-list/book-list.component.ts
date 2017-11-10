import { BookDataService } from '../core/book-data.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookData: BookDataService) {}

  ngOnInit() {
    this.bookData
      .getBooks()
      .subscribe(books => this.books = books);
  }
}

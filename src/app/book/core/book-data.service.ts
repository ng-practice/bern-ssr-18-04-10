import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book';
import { catchError, map, tap } from 'rxjs/operators';

import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';

const BOOKS_KEY = makeStateKey('books');

@Injectable()
export class BookDataService {
  endpoint = 'http://localhost:4730';

  constructor(
    private http: HttpClient,
    private state: TransferState) {}

  getBooks(): Observable<Book[]> {
    const books = this.state.get(BOOKS_KEY, null as any);

    if (books) {
      return of(books);
    }

    return this.http
      .get<Book[]>(`${this.endpoint}/books`)
      .pipe(tap(books => this.state.set(BOOKS_KEY, books as any)));
  }

  getBookByIsbn(isbn: string): Observable<Book> {

    return this.http
      .get<Book>(`${this.endpoint}/books/${isbn}`)
      .pipe(
        map(book => {
          book.title = book.title + ' MAPPED';
          return book;
        }),
        catchError(err => {
          // import { _throw } from 'rxjs/observable/throw';
          return _throw({
            message: `Book ${isbn} could not be loaded`
          });
        })
      );
  }
}

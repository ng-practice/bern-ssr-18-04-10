import { Book } from '../models/book';

export function emptyBook(): Book {
  return {
    isbn: '',
    author: '',
    title: '',
    subtitle: '',
    abstract: '',
    numPages: 0,
    publisher: null,
  };
}

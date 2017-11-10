export interface Book {
  isbn: string;
  title: string;
  subtitle: string;
  abstract: string;
  author: string;
  publisher: {
    name: string;
    url: string;
  };
  numPages: number;
}

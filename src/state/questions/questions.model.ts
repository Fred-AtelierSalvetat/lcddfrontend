export type Book = {
    id: string;
    title: string;
};

export type Books = Readonly<Book[]>;

export type BooksState = {
    books: Books;
    error?: Error;
};

export const initialBooksState = {
    books: [],
};

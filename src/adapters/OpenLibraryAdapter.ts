import { Book } from "../models/Book";
import { BookApiAdapter } from "../models/BookApiAdapter";

export class OpenLibraryAdapter implements BookApiAdapter {
  transform(data: any): Book[] {
    return data.docs.map((book: any) => ({
      title: book.title,
      author: book.author_name?.[0] || "Unknown",
      isbn: book.isbn?.[0] || "N/A",
      quantity: "N/A",
      price: "N/A",
    }));
  }
}

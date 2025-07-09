import { Book } from "../models/Book";
import { BookApiAdapter } from "../models/IBookApiAdapter";

export class OpenLibraryAdapter implements BookApiAdapter {

  getUrlPublisher(queryParams: { publisher: string; limit: number }): string {
    const { publisher, limit } = queryParams;
    const encoded = encodeURIComponent(`publisher:${publisher}`);
    return `https://openlibrary.org/search.json?q=${encoded}&limit=${limit}`;
  }

  getUrlAuthor({ author, limit }: { author: string; limit: number }): string {
    return `https://openlibrary.org/search.json?author=${encodeURIComponent(author)}&limit=${limit}`;
  }

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


import { Book } from "../models/Book";
import { BookApiAdapter } from "../models/IBookApiAdapter";

export class OpenLibraryAdapter implements BookApiAdapter {
  private buildQuery(field: string, value: string): string {
    return encodeURIComponent(`${field}:${value}`);
  }

  getUrlPublisher({ publisher, limit }: { publisher: string; limit: number }): string {
    const query = this.buildQuery("publisher", publisher);
    return `https://openlibrary.org/search.json?q=${query}&limit=${limit}`;
  }

  getUrlAuthor({ author, limit }: { author: string; limit: number }): string {
    const query = encodeURIComponent(author);
    return `https://openlibrary.org/search.json?author=${query}&limit=${limit}`;
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


import { Book } from "../models/Book";
import { BookApiAdapter } from "../models/BookApiAdapter";

export class BookSearchApiClient {
  private baseUrl: string;
  private adapter: BookApiAdapter;

  constructor(adapter: BookApiAdapter, baseUrl: string = "https://openlibrary.org") {
    this.adapter = adapter;
    this.baseUrl = baseUrl;
  }

  async getBooksByAuthor(author: string, limit = 10): Promise<Book[]> {
    const url = `${this.baseUrl}/search.json?author=${encodeURIComponent(author)}&limit=${limit}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return this.adapter.transform(data);
  }

  // Additional methods could be added here: getBooksByPublisher(), getBooksByYear(), etc.
}

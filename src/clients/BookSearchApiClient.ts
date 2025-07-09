import { Book } from "../models/Book";
import { BookApiAdapter } from "../models/IBookApiAdapter";

export class BookSearchApiClient {
  private adapter: BookApiAdapter;

  constructor(adapter: BookApiAdapter) {
    this.adapter = adapter;
  }
  async getBooksByPublisher(publisher: string, limit = 10): Promise<Book[]> {
    const url = this.adapter.getUrlPublisher({ publisher, limit });
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return this.adapter.transform(data);
  }

  async getBooksByAuthor(author: string, limit = 10): Promise<Book[]> {
    const url = this.adapter.getUrlAuthor({ author, limit });
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return this.adapter.transform(data);
  }
}

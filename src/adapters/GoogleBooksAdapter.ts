import { Book } from "../models/Book";
import { BookApiAdapter } from "../models/IBookApiAdapter";

export class GoogleBooksAdapter implements BookApiAdapter {

  getUrlPublisher(queryParams: { publisher: string; limit: number }): string {
    const { publisher, limit } = queryParams;
    const encodedPublisher = encodeURIComponent(publisher);
    return `https://www.googleapis.com/books/v1/volumes?q=inpublisher:${encodedPublisher}&maxResults=${limit}`;
  }

  getUrlAuthor({ author, limit }: { author: string; limit: number }): string {
    const encodedAuthor = encodeURIComponent(author);
    return `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodedAuthor}&maxResults=${limit}`;
  }

  transform(data: any): Book[] {
    if (!Array.isArray(data.items)) return [];

    return data.items.map((item: any) => {
      const volume = item.volumeInfo;

      return {
        title: volume.title || "Unknown Title",
        author: (volume.authors && volume.authors[0]) || "Unknown Author",
        isbn: this.getISBN(volume.industryIdentifiers),
        quantity: "N/A",
        price: "N/A",
      };
    });
  }

  private getISBN(identifiers: any[] = []): string {
    const isbn13 = identifiers.find(id => id.type === "ISBN_13");
    const isbn10 = identifiers.find(id => id.type === "ISBN_10");
    return isbn13?.identifier || isbn10?.identifier || "N/A";
  }
}

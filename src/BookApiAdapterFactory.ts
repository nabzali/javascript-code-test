import { BookApiAdapter } from "./models/IBookApiAdapter";
import { OpenLibraryAdapter } from "./adapters/OpenLibraryAdapter";
import { GoogleBooksAdapter } from "./adapters/GoogleBooksAdapter";

// Add new APIs here and create Adapter Classes
// All adapters use the BookApiAdapter interface
const ADAPTERS: Record<string, BookApiAdapter> = {
  "openlibrary": new OpenLibraryAdapter(),
  "googlebooks": new GoogleBooksAdapter(),
};

export class BookApiAdapterFactory {
  static getAdapter(providerName: string): BookApiAdapter {
    const adapter = ADAPTERS[providerName.toLowerCase()];
    if (!adapter) throw new Error(`Unknown provider: ${providerName}`);
    return adapter;
  }
}

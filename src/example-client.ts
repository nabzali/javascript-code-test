import { config } from "../config";
import { BookSearchApiClient } from "./clients/BookSearchApiClient";
import { BookApiAdapterFactory } from "./BookApiAdapterFactory";
const { provider, author, limit } = config;

/**
 * Example client to demonstrate usage of the BookSearchApiClient with different adapters.
 * It fetches books by a specified author using the configured API provider.
 */
async function main() {
  try {
    console.log(`Using Book API Provider: ${provider}`);

    const adapter = BookApiAdapterFactory.getAdapter(provider);
    const client = new BookSearchApiClient(adapter);

    const books = await client.getBooksByAuthor(author, limit);
    console.log(books);
  } catch (error) {
    console.error("Error:", (error as Error).message);
  }
}

main();

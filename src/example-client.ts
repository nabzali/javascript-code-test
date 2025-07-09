import { BookSearchApiClient } from "./clients/BookSearchApiClient";
import { BookApiAdapterFactory } from "./BookApiAdapterFactory";

const provider = process.env.BOOK_API_PROVIDER || "openlibrary"; // Default to OpenLibrary if not set

async function main() {
  try {

    // Retrieve the appropriate adapter (configured via environment variable)
    const adapter = BookApiAdapterFactory.getAdapter(provider);

    // Pass this value to the client
    const client = new BookSearchApiClient(adapter);

    // Fetch books by author
    // Example: Fetch 10 books by Shakespeare
    const books = await client.getBooksByAuthor("Shakespeare", 10);
    console.log(books);
  } catch (error) {
    console.error("Error:", (error as Error).message);
  }
}

main();

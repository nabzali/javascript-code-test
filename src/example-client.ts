import { OpenLibraryAdapter } from "./adapters/OpenLibraryAdapter";
import { BookSearchApiClient } from "./clients/BookSearchApiClient";

async function main() {
  const adapter = new OpenLibraryAdapter();
  const client = new BookSearchApiClient(adapter);

  try {
    const books = await client.getBooksByAuthor("Shakespeare", 10);
    console.log("Books by Shakespeare:");
    console.log(books);
  } catch (error) {
    console.error("Error fetching books:", (error as Error).message);
  }
}

main();

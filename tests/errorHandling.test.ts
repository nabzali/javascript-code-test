import { BookSearchApiClient } from "../src/clients/BookSearchApiClient";
import { OpenLibraryAdapter } from "../src/adapters/OpenLibraryAdapter";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ docs: [ { title: "Test", author_name: ["Author"], isbn: ["123"] } ] })
  })
) as jest.Mock;

test("fetches books by author using OpenLibrary", async () => {
  const adapter = new OpenLibraryAdapter();
  const client = new BookSearchApiClient(adapter);
  const books = await client.getBooksByAuthor("Author", 5);

  expect(books).toHaveLength(1);
  expect(books[0].title).toBe("Test");
});

test("throws on fetch error", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ ok: false, status: 500 })
  ) as jest.Mock;

  const client = new BookSearchApiClient(new OpenLibraryAdapter());

  await expect(client.getBooksByAuthor("X", 5)).rejects.toThrow("Request failed with status 500");
});

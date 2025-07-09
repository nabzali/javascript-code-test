import { OpenLibraryAdapter } from "../src/adapters/OpenLibraryAdapter";
import { GoogleBooksAdapter } from "../src/adapters/GoogleBooksAdapter";

test("transforms OpenLibrary response", () => {
  const adapter = new OpenLibraryAdapter();
  const result = adapter.transform({
    docs: [
      {
        title: "Hamlet",
        author_name: ["Shakespeare"],
        isbn: ["123"],
      }
    ]
  });

  expect(result[0].title).toBe("Hamlet");
  expect(result[0].author).toBe("Shakespeare");
  expect(result[0].isbn).toBe("123");
});

test("transforms GoogleBooksApi response", () => {
  const adapter = new GoogleBooksAdapter();
  const result = adapter.transform({
    items: [
      {
        volumeInfo: {
          title: "Romeo and Juliet",
          authors: ["William Shakespeare"],
          industryIdentifiers: [
            { type: "ISBN_13", identifier: "9780143128540" },
            { type: "ISBN_10", identifier: "014312854X" }
          ]
        }
      }
    ]
  });

  expect(result).toHaveLength(1);
  expect(result[0].title).toBe("Romeo and Juliet");
  expect(result[0].author).toBe("William Shakespeare");
  expect(result[0].isbn).toBe("9780143128540");
  expect(result[0].quantity).toBe("N/A");
  expect(result[0].price).toBe("N/A");
});

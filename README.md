# Javascript Code Test

`BookSearchApiClient` is a simple class that makes a call to a http API to retrieve a list of books and return them.

You need to refactor the `BookSearchApiClient` class, and demonstrate in `example-client.js` how it would be used. Refactor to what you consider to be production ready code. You can change it in anyway you would like and can use javascript or typescript.

Things you will be asked about:

1. How could you easily add other book seller APIs in the the future
2. How would you manage differences in response payloads between different APIs without needing to make future changes to whatever code you have in example-client.js
3. How would you implement different query types for example: by publisher, by year published etc
4. How your code would be tested

---

# Solution

A modular, extensible, and testable TypeScript client for fetching and normalizing book data from multiple book seller APIs.

Originally developed as a refactoring exercise for a JavaScript code test, this project replaces a legacy implementation (`example-client.js`) with a TypeScript solution using the Adapter design pattern and support for multiple providers.

## 🔍 Features

- Fetch book data from multiple APIs (OpenLibrary, Google Books)
- Search by author or publisher
- Unified data format across different APIs
- Extensible via the Adapter pattern
- Type-safety with TypeScript
- Includes unit tests with Jest

## ⚙️ Setup

> Requirements: Node.js **v18+** (for native `fetch` support), `npm`

1. Clone the repository:
   ```bash
   git clone https://github.com/nabzali/javascript-code-test.git
   cd javascript-code-test

2. Install dependencies:
   ```npm install```

3. Set up environment variables. You may edit the ```.env``` file to edit these configurations

## Usage

   ```ts-node src/example-client.ts```

Sample Output:

```
[
  {
    "title": "Hamlet",
    "author": "William Shakespeare",
    "isbn": "9780141396507",
    "quantity": "N/A",
    "price": "N/A"
  },
  ...
]
```

## Testing
This project uses jest for testing. There are two tests, one which covers response formats for different API usage, and the other which covers error handling

Simply run the command below to run tests
```
npm run test
```


## Adding New Book APIs
This project uses the Adapter design pattern to support multiple book data sources.

To add a new API:

- Create a new adapter class in src/adapters/ that implements IBookApiAdapter.
- Implement the necessary methods (e.g. getUrlAuthor, transformResponse).
- Register the new adapter in BookApiAdapterFactory.
- Add any required config values to .env.

Example:

```
export class MyNewBookAdapter implements IBookApiAdapter {
  getUrlAuthor(author: string, limit: number) { ... }
  transformResponse(json: any) { ... }
}
```

## 📦 Available Adapters
- OpenLibrary  | `https://openlibrary.org`
- Google Books | `https://www.googleapis.com/books/v1/volumes`

## 🧠 Extending Search Queries
New query types (e.g. search by ISBN or publication year) can be supported by:
- Adding new methods in IBookApiAdapter (e.g. getUrlIsbn)
- Implementing the method in each adapter (if supported)
- Updating BookSearchApiClient with corresponding functions




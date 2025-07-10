# Javascript Code Test

`BookSearchApiClient` is a simple class that makes a call to a http API to retrieve a list of books and return them.

You need to refactor the `BookSearchApiClient` class, and demonstrate in `example-client.js` how it would be used. Refactor to what you consider to be production ready code. You can change it in anyway you would like and can use javascript or typescript.

Things you will be asked about:

1. How could you easily add other book seller APIs in the the future
2. How would you manage differences in response payloads between different APIs without needing to make future changes to whatever code you have in example-client.js
3. How would you implement different query types for example: by publisher, by year published etc
4. How your code would be tested

---------------------------

# Solution - Book Search API Client

A modular, extensible, and testable TypeScript client for fetching and normalizing book data from multiple book seller APIs.

Originally developed as a refactoring exercise for a JavaScript code test, this project replaces a legacy implementation (`example-client.js`) with a production-ready TypeScript solution using the Adapter design pattern and support for multiple providers.

## 🔍 Features

- Fetch book data from multiple APIs (OpenLibrary, Google Books)
- Search by author or publisher
- Unified data format across different APIs
- Extensible via the Adapter pattern
- Fully type-safe with TypeScript
- Includes unit tests with Jest

---

## 📁 Project Structure

.
├── src/
│ ├── adapters/ # API-specific adapters (OpenLibrary, GoogleBooks)
│ ├── clients/ # Main BookSearchApiClient class
│ ├── models/ # Shared interfaces and data types
│ └── example-client.ts # Entry point showing usage
├── tests/ # Jest test suites
├── .env # Environment variables (use .env.example in production)
├── jest.config.js
├── tsconfig.json
├── package.json
└── README.md

---

## ⚙️ Setup

> Requirements: Node.js **v18+** (for native `fetch` support), `npm`

1. Clone the repository:
   ```bash
   git clone https://github.com/nabzali/javascript-code-test.git
   cd javascript-code-test

2. Install dependencies:
   ```npm install```

3. Set up environment variables. You may edit the .env file to edit these configurations

4. Usage
   ```ts-node src/example-client.ts

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

5. Testing.
npm test

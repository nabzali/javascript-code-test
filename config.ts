import dotenv from "dotenv";
dotenv.config(); // Loads `.env` variables

export const config = {
  chosenApi: process.env.BOOK_API_PROVIDER || "openlibrary",
  limit: process.env.LIMIT ? parseInt(process.env.LIMIT, 10) : 10,
  author: process.env.AUTHOR || "Shakespeare",
};

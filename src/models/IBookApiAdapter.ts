import { Book } from "./Book";

export interface BookApiAdapter {
  getUrlAuthor(queryParams: { author: string; limit: number }): string
  getUrlPublisher(queryParams: { publisher: string; limit: number }): string;
  transform(data: unknown): Book[];
}
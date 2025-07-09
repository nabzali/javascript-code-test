import { Book } from "./Book";

export interface BookApiAdapter {
  getUrl(queryParams: { author: string; limit: number }): string
  transform(data: unknown): Book[];
}
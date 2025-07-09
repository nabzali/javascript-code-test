import { Book } from "./Book";

export interface BookApiAdapter {
  transform(data: any): Book[];
}
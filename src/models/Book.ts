/*  
  To define a single internal representation of a book, regardless of where it comes from.
  Ensures consistent structure across the app and can also ensure type safety when consuming book data
*/
export interface Book {
  title: string;
  author: string;
  isbn: string;
  quantity: string;
  price: string;
}

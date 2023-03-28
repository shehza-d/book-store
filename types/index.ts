export interface BooksType {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

export interface BookType {
  id: number;
  name: string;
  author: string;
  type: string;
  price: number;
  "current-stock": number;
  available: boolean;
}

export interface OrderType {
  id: string;
  bookId: number;
  customerName: string;
  createdBy: string;
  quantity: number;
  timestamp: number;
}
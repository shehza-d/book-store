export interface booksType {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

export interface bookType {
  id: number;
  name: string;
  author: string;
  type: string;
  price: number;
  "current-stock": number;
  available: boolean;
}

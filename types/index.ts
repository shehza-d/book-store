export interface IBooks {
  id: number;
  name: string;
  type: string;
  available: boolean;
  created_at: string;
}

export interface IBook {
  id: number;
  name: string;
  type: string;
  price?: number;
  available: boolean;
  created_at: string;
}

// {
//   id: number;
//   name: string;
//   author: string;
//   type: string;
//   price: number;
//   "current-stock": number;
//   available: boolean;
// }

export interface OrderType {
  id: string;
  bookId: number;
  customerName: string;
  createdBy: string;
  quantity: number;
  timestamp: number;
}

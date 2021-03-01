export interface Product {
  id: number;
  name: string;
  note?: string;
  imageUrl?: string;
}

export interface Category {
  id: number;
  title: string;
  items: Product[];
}

export interface Product {
  id: number;
  name: string;
  note?: string;
  imageUrl?: string;
  countInShoppingList?: number;
}

export interface Category {
  id: number;
  title: string;
  items: Product[];
}



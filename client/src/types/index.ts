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

export type ShoppingHistoryItemType = Product & {
  category: {
    id: number;
    title: string;
  };
};

export type ShoppingHistoryType = {
  id: number;
  name: string;
  status: string;
  createdAt: string;
  items: ShoppingHistoryItemType[];
};

import { createContext } from "react";
import { Product } from "../../types";

type ShoppingHistoryItemType = Product & {
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

type HistoryContextType = {
  historyState: ShoppingHistoryType[];
  historyDispatch: React.Dispatch<any>;
};

export const HistoryContext = createContext<HistoryContextType>({
  historyState: [],
  historyDispatch: () => null,
});

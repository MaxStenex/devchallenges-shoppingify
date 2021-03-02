import { createContext } from "react";
import { ItemsActions } from "./actions";
import { ItemsStateType, itemsInitialState } from "./reducer";

type ItemsContextType = {
  itemsState: ItemsStateType;
  itemsDispatch: (action: ItemsActions) => void;
};

export const ItemsContext = createContext<ItemsContextType>({
  itemsState: itemsInitialState,
  itemsDispatch: () => null,
});

import { Category } from "../../types";
import { ItemsActions, ItemsActionTypes } from "./actions";

export type ItemsStateType = {
  categories: Category[];
};

export const itemsInitialState: ItemsStateType = {
  categories: [],
};

export const itemsReducer = (
  state: ItemsStateType,
  action: ItemsActions
): ItemsStateType => {
  switch (action.type) {
    case ItemsActionTypes.SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload.categories,
      };
    }
    case ItemsActionTypes.ADD_ITEM: {
      const categoryTitle = action.payload.categoryTitle;
      const newItem = action.payload.item;

      const isCategoryExist = state.categories.some((c) => c.title === categoryTitle);
      if (!isCategoryExist) {
        const newCategory: Category = {
          id: Date.now(),
          title: categoryTitle,
          items: [newItem],
        };
        return { ...state, categories: [...state.categories, newCategory] };
      }
      return {
        ...state,
        categories: state.categories.map((c) => {
          if (c.title === categoryTitle) {
            c.items.push(newItem);
          }
          return c;
        }),
      };
    }

    default:
      return state;
  }
};

import { Category } from "../../types";
import { createNewCategory } from "../../utils/createNewCategory";
import { ItemsActions, ItemsActionTypes } from "./actions";

export type ItemsStateType = {
  categories: Category[];
  shoppingList: Category[];
  itemDetailsId: number | null;
};

export const itemsInitialState: ItemsStateType = {
  categories: [],
  shoppingList: [],
  itemDetailsId: null,
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
        const newCategory = createNewCategory(categoryTitle);
        newCategory.items.push(newItem);
        return { ...state, categories: [...state.categories, newCategory] };
      }
      return {
        ...state,
        categories: state.categories.map((c) => {
          if (c.title === categoryTitle) {
            return { ...c, items: [...c.items, newItem] };
          }
          return { ...c, items: [...c.items] };
        }),
      };
    }

    case ItemsActionTypes.ADD_ITEM_IN_SHOPPING_LIST: {
      const categoryTitle = action.payload.categoryTitle;
      const newItem = action.payload.item;

      const existingCategory = state.shoppingList.find((c) => c.title === categoryTitle);
      if (!existingCategory) {
        const newCategory = createNewCategory(categoryTitle);
        newCategory.items.push(newItem);
        return { ...state, shoppingList: [...state.shoppingList, newCategory] };
      }

      const isItemAlreadyAdded = existingCategory.items.some(
        (item) => item.name === newItem.name
      );
      if (isItemAlreadyAdded) {
        return { ...state };
      }

      return {
        ...state,
        shoppingList: state.shoppingList.map((c) => {
          if (c.title === categoryTitle) {
            return { ...c, items: [...c.items, newItem] };
          }
          return { ...c, items: [...c.items] };
        }),
      };
    }

    case ItemsActionTypes.SET_ITEM_DETAILS_ID: {
      return {
        ...state,
        itemDetailsId: action.payload.itemId,
      };
    }

    case ItemsActionTypes.DELETE_ITEM: {
      return {
        ...state,
        itemDetailsId: null,
        shoppingList: state.shoppingList.map((c) => ({
          ...c,
          items: [...c.items.filter((item) => item.id !== action.payload.itemId)],
        })),
        categories: state.categories.map((c) => ({
          ...c,
          items: [...c.items.filter((item) => item.id !== action.payload.itemId)],
        })),
      };
    }

    default:
      return state;
  }
};

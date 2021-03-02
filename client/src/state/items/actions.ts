import { Category, Product } from "../../types";

export enum ItemsActionTypes {
  SET_CATEGORIES = "items_SET_CATEGORIES",
  ADD_ITEM = "items_ADD_ITEM",
  ADD_ITEM_IN_SHOPPING_LIST = "items_ADD_ITEM_IN_SHOPPING_LIST",
}

export type ItemsActions = SetCategoriesType | AddItemType | AddItemToShoppingListType;

type SetCategoriesType = {
  type: ItemsActionTypes.SET_CATEGORIES;
  payload: {
    categories: Category[];
  };
};

export const setCategories = (categories: Category[]): SetCategoriesType => ({
  type: ItemsActionTypes.SET_CATEGORIES,
  payload: {
    categories,
  },
});

type AddItemType = {
  type: ItemsActionTypes.ADD_ITEM;
  payload: {
    item: Product;
    categoryTitle: string;
  };
};

export const addItem = (item: Product, categoryTitle: string): AddItemType => ({
  type: ItemsActionTypes.ADD_ITEM,
  payload: {
    item,
    categoryTitle,
  },
});

type AddItemToShoppingListType = {
  type: ItemsActionTypes.ADD_ITEM_IN_SHOPPING_LIST;
  payload: {
    item: Product;
    categoryTitle: string;
  };
};

export const addItemInShoppingList = (
  item: Product,
  categoryTitle: string
): AddItemToShoppingListType => ({
  type: ItemsActionTypes.ADD_ITEM_IN_SHOPPING_LIST,
  payload: {
    item,
    categoryTitle,
  },
});

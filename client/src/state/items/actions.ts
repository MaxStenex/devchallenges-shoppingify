import { Category, Product } from "../../types";

export enum ItemsActionTypes {
  SET_CATEGORIES = "items_SET_CATEGORIES",
  ADD_ITEM = "items_ADD_ITEM",
  ADD_ITEM_IN_SHOPPING_LIST = "items_ADD_ITEM_IN_SHOPPING_LIST",
  SET_ITEM_DETAILS_ID = "items_SET_ITEM_DETAILS_ID",
  DELETE_ITEM = "items_DELETE_ITEM",
  DELETE_ITEM_FROM_SHOPPING_LIST = "items_DELETE_ITEM_FROM_SHOPPING_LIST",
  CHANGE_COUNT_OF_PRODUCT_IN_SHOPPING_LIST = "items_CHANGE_COUNT_OF_PRODUCT_IN_SHOPPING_LIST",
}

export type ItemsActions =
  | SetCategoriesType
  | AddItemType
  | AddItemToShoppingListType
  | SetItemDetailsIdType
  | DeleteItemType
  | DeleteItemFromShoppingListType
  | ChangeCountOfProductInShoppingListType;

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

type SetItemDetailsIdType = {
  type: ItemsActionTypes.SET_ITEM_DETAILS_ID;
  payload: {
    itemId: number;
  };
};

export const setItemDetailsId = (itemId: number): SetItemDetailsIdType => ({
  type: ItemsActionTypes.SET_ITEM_DETAILS_ID,
  payload: { itemId },
});

type DeleteItemType = {
  type: ItemsActionTypes.DELETE_ITEM;
  payload: { itemId: number };
};

export const deleteItem = (itemId: number): DeleteItemType => ({
  type: ItemsActionTypes.DELETE_ITEM,
  payload: {
    itemId,
  },
});

type DeleteItemFromShoppingListType = {
  type: ItemsActionTypes.DELETE_ITEM_FROM_SHOPPING_LIST;
  payload: {
    itemId: number;
  };
};

export const deleteItemFromShoppingList = (
  itemId: number
): DeleteItemFromShoppingListType => ({
  type: ItemsActionTypes.DELETE_ITEM_FROM_SHOPPING_LIST,
  payload: { itemId },
});

type ChangeCountOfProductInShoppingListType = {
  type: ItemsActionTypes.CHANGE_COUNT_OF_PRODUCT_IN_SHOPPING_LIST;
  payload: {
    itemId: number;
    count: number;
  };
};

export const changeCountOfProductInShoppingList = (
  itemId: number,
  count: number
): ChangeCountOfProductInShoppingListType => ({
  type: ItemsActionTypes.CHANGE_COUNT_OF_PRODUCT_IN_SHOPPING_LIST,
  payload: { count, itemId },
});

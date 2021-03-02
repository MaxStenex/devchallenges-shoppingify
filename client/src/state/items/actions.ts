import { Category, Product } from "../../types";

export enum ItemsActionTypes {
  SET_CATEGORIES = "items_SET_CATEGORIES",
  ADD_ITEM = "items_ADD_ITEM",
}

export type ItemsActions = SetCategoriesType | AddItemType;

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

import { Category } from "../types";

export const createNewCategory = (title: string): Category => {
  return {
    id: Date.now(),
    title,
    items: [],
  };
};

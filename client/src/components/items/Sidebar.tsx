import { AddItem } from "./AddItem";
import { ShoppingList } from "./ShoppingList";

export enum SidebarComponents {
  AddItem = "ADD_ITEM",
  ShoppingList = "SHOPPING_LIST",
}

type Props = {
  componentName: SidebarComponents;
  changeComponent: (componentName: SidebarComponents) => void;
};

export const Sidebar: React.FC<Props> = ({ componentName, changeComponent }) => {
  if (componentName === SidebarComponents.ShoppingList) {
    return <ShoppingList changeSidebarComponent={changeComponent} />;
  }
  if (componentName === SidebarComponents.AddItem) {
    return <AddItem changeSidebarComponent={changeComponent} />;
  }
  return null;
};

import { AddItem } from "./AddItem";
import { ItemDetails } from "./ItemDetails";
import { ShoppingList } from "./ShoppingList";

export enum SidebarComponents {
  AddItem = "ADD_ITEM",
  ShoppingList = "SHOPPING_LIST",
  ItemDetails = "ITEM_DETAILS",
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
  if (componentName === SidebarComponents.ItemDetails) {
    return <ItemDetails changeSidebarComponent={changeComponent} />;
  }
  return null;
};

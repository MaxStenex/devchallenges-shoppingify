import "../styles/pages/items.scss";

import { Navbar } from "../components/shared/Navbar";
import { Products } from "../components/items/Products";
import { AddItem } from "../components/items/AddItem";
import { ShoppingList } from "../components/items/ShoppingList";
import { useState } from "react";

export enum SidebarComponents {
  AddItem = "ADD_ITEM",
  ShoppingList = "SHOPPING_LIST",
}

const Items = () => {
  const [sidebarComponent, setSidebarComponent] = useState<SidebarComponents>(
    SidebarComponents.ShoppingList
  );
  const changeSidebarComponent = (componentName: SidebarComponents) => {
    setSidebarComponent(componentName);
  };

  return (
    <div className="items-page">
      <Navbar />
      <main className="items-page__main">
        <Products />
        <div className="items-page__sidebar">
          {sidebarComponent === SidebarComponents.ShoppingList ? (
            <ShoppingList changeSidebarComponent={changeSidebarComponent} />
          ) : (
            <AddItem changeSidebarComponent={changeSidebarComponent} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Items;

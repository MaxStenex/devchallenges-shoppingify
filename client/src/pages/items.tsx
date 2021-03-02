import "../styles/pages/items.scss";

import { Navbar } from "../components/shared/Navbar";
import { Products } from "../components/items/Products";
import { useReducer, useState } from "react";
import { Sidebar, SidebarComponents } from "../components/items/Sidebar";
import { itemsInitialState, itemsReducer } from "../state/items/reducer";
import { ItemsContext } from "../state/items/context";

const Items = () => {
  const [sidebarComponentName, setSidebarComponentName] = useState<SidebarComponents>(
    SidebarComponents.ShoppingList
  );
  const changeSidebarComponent = (componentName: SidebarComponents) => {
    setSidebarComponentName(componentName);
  };
  const [itemsState, itemsDispatch] = useReducer(itemsReducer, itemsInitialState);

  return (
    <ItemsContext.Provider value={{ itemsState, itemsDispatch }}>
      <div className="items-page">
        <Navbar />
        <main className="items-page__main">
          <Products />
          <div className="items-page__sidebar">
            <Sidebar
              componentName={sidebarComponentName}
              changeComponent={changeSidebarComponent}
            />
          </div>
        </main>
      </div>
    </ItemsContext.Provider>
  );
};

export default Items;

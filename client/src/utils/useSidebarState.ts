import { useState } from "react";
import { SidebarComponents } from "../components/shared/Sidebar";

export const useSidebarState = () => {
  const [sidebarComponentName, setSidebarComponentName] = useState<SidebarComponents>(
    SidebarComponents.ShoppingList
  );

  return { sidebarComponentName, setSidebarComponentName };
};

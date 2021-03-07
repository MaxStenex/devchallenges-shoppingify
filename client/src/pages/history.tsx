import React from "react";
import { ShoppingHistory } from "../components/History/ShoppingHistory";
import { Navbar } from "../components/shared/Navbar";
import { Sidebar, SidebarComponents } from "../components/shared/Sidebar";
import { useSidebarState } from "../utils/useSidebarState";

const History = () => {
  const { sidebarComponentName, setSidebarComponentName } = useSidebarState();
  const changeSidebarComponent = (componentName: SidebarComponents) => {
    setSidebarComponentName(componentName);
  };

  return (
    <div className="page">
      <Navbar />
      <main className="page__main">
        <ShoppingHistory />
        <div className="page__sidebar">
          <Sidebar
            componentName={sidebarComponentName}
            changeComponent={changeSidebarComponent}
          />
        </div>
      </main>
    </div>
  );
};

export default History;

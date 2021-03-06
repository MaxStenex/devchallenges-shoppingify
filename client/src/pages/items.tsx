import { Navbar } from "../components/shared/Navbar";
import { Products } from "../components/items/Products";
import { Sidebar, SidebarComponents } from "../components/shared/Sidebar";
import { useSidebarState } from "../utils/useSidebarState";

const Items = () => {
  const { sidebarComponentName, setSidebarComponentName } = useSidebarState();

  const changeSidebarComponent = (componentName: SidebarComponents) => {
    setSidebarComponentName(componentName);
  };

  return (
    <div className="page">
      <Navbar />
      <main className="page__main">
        <Products changeSidebarComponent={changeSidebarComponent} />
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

export default Items;

import { useContext } from "react";
import BottleSvg from "../../images/bottle.svg";
import { ItemsContext } from "../../state/items/context";
import "../../styles/components/ShoppingList.scss";
import { SidebarComponents } from "./Sidebar";

type Props = {
  changeSidebarComponent: (componentName: SidebarComponents) => void;
};

export const ShoppingList: React.FC<Props> = ({ changeSidebarComponent }) => {
  const { itemsState } = useContext(ItemsContext);

  const changeSidebarComponentOnAddItem = () => {
    changeSidebarComponent(SidebarComponents.AddItem);
  };

  return (
    <section className="shopping-list">
      <div className="shopping-list__wrapper">
        <div className="shopping-list__add add-new">
          <img src={BottleSvg} alt="#" className="add-new__image" />
          <div className="add-new__main">
            <h3 className="add-new__title">Didn’t find what you need?</h3>
            <button className="add-new__button" onClick={changeSidebarComponentOnAddItem}>
              Add item
            </button>
          </div>
        </div>
        <h2 className="shopping-list__title">Shopping list</h2>
        {itemsState.shoppingList.map((category) => (
          <div key={category.id} className="shopping-list__section shopping-section">
            <h4 className="shopping-section__title">{category.title}</h4>
            <ul className="shopping-section__list">
              {category.items.map((item) => (
                <li key={item.id} className="shopping-section__item">
                  <span>{item.name}</span>
                  <button>3 pcs</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <footer className="shopping-list__footer">
        <input placeholder="Enter a name" type="text" />
        <button>Save</button>
      </footer>
    </section>
  );
};

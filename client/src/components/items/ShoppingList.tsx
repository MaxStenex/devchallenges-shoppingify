import BottleSvg from "../../images/bottle.svg";
import "../../styles/components/ShoppingList.scss";
import { SidebarComponents } from "./Sidebar";

type Props = {
  changeSidebarComponent: (componentName: SidebarComponents) => void;
};

export const ShoppingList: React.FC<Props> = ({ changeSidebarComponent }) => {
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
        <div className="shopping-list__section shopping-section">
          <h4 className="shopping-section__title">Fruit and vegetables</h4>
          <ul className="shopping-section__list">
            <li className="shopping-section__item">
              <span>Avocado</span>
              <button>3 pcs</button>
            </li>
            <li className="shopping-section__item">
              <span>Pre-cooked corn 450g</span>
              <button>3 pcs</button>
            </li>
          </ul>
        </div>
        <div className="shopping-list__section shopping-section">
          <h4 className="shopping-section__title">Meat and Fish</h4>
          <ul className="shopping-section__list">
            <li className="shopping-section__item">
              <span>Chicken</span>
              <button>1 pcs</button>
            </li>
          </ul>
        </div>
      </div>
      <footer className="shopping-list__footer">
        <input placeholder="Enter a name" type="text" />
        <button>Save</button>
      </footer>
    </section>
  );
};

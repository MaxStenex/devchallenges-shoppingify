import { useContext, useState } from "react";
import BottleSvg from "../../../images/bottle.svg";
import { ItemsContext } from "../../../state/items/context";
import "../../../styles/components/ShoppingList.scss";
import { ShoppingItemButtons } from "./ShoppingItemButtons";
import { SidebarComponents } from "./";
import api from "../../../api";
import { clearShoppingList } from "../../../state/items/actions";

type Props = {
  changeSidebarComponent: (componentName: SidebarComponents) => void;
};

export const ShoppingList: React.FC<Props> = ({ changeSidebarComponent }) => {
  const [shoppingListName, setShoppingListName] = useState("");
  const [isVisibleSubmitButtons, setIsVisibleSubmitButtons] = useState(false);
  const { itemsState, itemsDispatch } = useContext(ItemsContext);

  const changeSidebarComponentOnAddItem = () => {
    changeSidebarComponent(SidebarComponents.AddItem);
  };
  const onSaveButtonClick = () => {
    if (
      shoppingListName.trim().length > 0 &&
      shoppingListName.trim().length < 100 &&
      itemsState.shoppingList.length > 0
    ) {
      setIsVisibleSubmitButtons(true);
    }
  };
  const onCompleteButtonClick = async () => {
    const itemsIds = itemsState.shoppingList.reduce<number[]>((acc, curr) => {
      curr.items.map((item) => acc.push(item.id));
      return acc;
    }, []);

    await api.post("/shopping-history", {
      name: shoppingListName,
      status: "complete",
      itemsIds,
    });
    itemsDispatch(clearShoppingList());
    setShoppingListName("");
    setIsVisibleSubmitButtons(false);
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
                <li key={item.id} className="shopping-section__item shopping-item">
                  <span className="shopping-item__name">{item.name}</span>
                  <ShoppingItemButtons
                    itemId={item.id}
                    countOfProduct={item.countInShoppingList || 0}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <footer className="shopping-list__footer">
        {isVisibleSubmitButtons ? (
          <>
            <button className="shopping-list__cancel">cancel</button>
            <button onClick={onCompleteButtonClick} className="shopping-list__complete">
              Complete
            </button>
          </>
        ) : (
          <>
            <input
              value={shoppingListName}
              onChange={(e) => setShoppingListName(e.currentTarget.value)}
              placeholder="Enter a name"
              type="text"
              className="shopping-list__input"
            />
            <button onClick={onSaveButtonClick} className="shopping-list__save">
              Save
            </button>
          </>
        )}
      </footer>
    </section>
  );
};

import DeleteSvg from "../../images/trash.svg";
import { useContext, useState } from "react";
import { deleteItemFromShoppingList } from "../../state/items/actions";
import { ItemsContext } from "../../state/items/context";

type Props = {
  itemId: number;
};

export const ShoppingItemButtons: React.FC<Props> = ({ itemId }) => {
  const [buttonsOpened, setButtonsOpened] = useState(false);
  const [countOfItem, setCountOfItem] = useState(0);
  const { itemsDispatch } = useContext(ItemsContext);

  const toggleButtonsMenu = () => {
    setButtonsOpened(!buttonsOpened);
  };
  const removeItemFromList = (itemId: number) => {
    itemsDispatch(deleteItemFromShoppingList(itemId));
  };
  const changeCountOfItem = (amount: number) => {
    if ((countOfItem === 0 && amount === -1) || countOfItem === 99) {
      return;
    }
    setCountOfItem((oldCount) => oldCount + amount);
  };

  return (
    <div
      className={`shopping-item__buttons + ${
        buttonsOpened ? "shopping-item__buttons--opened" : ""
      }`}
    >
      {buttonsOpened ? (
        <>
          <img
            src={DeleteSvg}
            alt="del"
            className="shopping-item__delete"
            onClick={() => removeItemFromList(itemId)}
          />
          <button onClick={() => changeCountOfItem(-1)} className="shopping-item__minus">
            -
          </button>
          <button onClick={toggleButtonsMenu} className="shopping-item__count">
            {countOfItem} pcs
          </button>
          <button onClick={() => changeCountOfItem(1)} className="shopping-item__plus">
            +
          </button>
        </>
      ) : (
        <button onClick={toggleButtonsMenu} className="shopping-item__count">
          {countOfItem} pcs
        </button>
      )}
    </div>
  );
};

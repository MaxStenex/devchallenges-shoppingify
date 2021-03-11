import DeleteSvg from "../../../images/trash.svg";
import { useContext, useState } from "react";
import {
  changeCountOfProductInShoppingList,
  deleteItemFromShoppingList,
} from "../../../state/items/actions";
import { ItemsContext } from "../../../state/items/context";

type Props = {
  itemId: number;
  countOfProduct: number;
};

export const ShoppingItemButtons: React.FC<Props> = ({ itemId, countOfProduct }) => {
  const [buttonsOpened, setButtonsOpened] = useState(false);
  const { itemsDispatch } = useContext(ItemsContext);

  const toggleButtonsMenu = () => {
    setButtonsOpened(!buttonsOpened);
  };
  const removeItemFromList = (itemId: number) => {
    itemsDispatch(deleteItemFromShoppingList(itemId));
  };
  const changeCountOfItem = (itemId: number, changeAmount: number) => {
    if (countOfProduct === 0 && changeAmount < 0) {
      return;
    }
    if (countOfProduct >= 99 && changeAmount > 0) {
      return;
    }

    itemsDispatch(changeCountOfProductInShoppingList(itemId, changeAmount));
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
          <button
            onClick={() => changeCountOfItem(itemId, -1)}
            className="shopping-item__minus"
          >
            -
          </button>
          <button onClick={toggleButtonsMenu} className="shopping-item__count">
            {countOfProduct} pcs
          </button>
          <button
            onClick={() => changeCountOfItem(itemId, 1)}
            className="shopping-item__plus"
          >
            +
          </button>
        </>
      ) : (
        <button onClick={toggleButtonsMenu} className="shopping-item__count">
          {countOfProduct} pcs
        </button>
      )}
    </div>
  );
};

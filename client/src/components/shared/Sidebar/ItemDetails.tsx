import { useContext, useEffect } from "react";
import { useState } from "react";
import api from "../../../api";
import { addItemInShoppingList, deleteItem } from "../../../state/items/actions";
import { ItemsContext } from "../../../state/items/context";
import "../../../styles/components/ItemDetails.scss";
import { Product } from "../../../types";
import { SidebarComponents } from "./";

type Props = {
  changeSidebarComponent: (componentName: SidebarComponents) => void;
};

export const ItemDetails: React.FC<Props> = ({ changeSidebarComponent }) => {
  const [item, setItem] = useState<Product | null>(null);
  const [categoryTitle, setCategoryTitle] = useState<string | null>(null);
  const { itemsState, itemsDispatch } = useContext(ItemsContext);

  useEffect(() => {
    const itemDetailsId = itemsState.itemDetailsId;
    const fetchItemDetails = async (itemId: number) => {
      try {
        const res = await api.get(`/items/${itemId}`);
        const data = res.data;
        setItem({
          id: data.id,
          name: data.name,
          imageUrl: data.imageUrl,
          note: data.note,
        });
        setCategoryTitle(data.category.title);
      } catch (error) {}
    };

    if (itemDetailsId) {
      fetchItemDetails(itemDetailsId);
    }
  }, [itemsState.itemDetailsId]);

  const backToShoppingList = () => {
    changeSidebarComponent(SidebarComponents.ShoppingList);
  };

  const onAddItemInShoppingList = (
    item: Product | null,
    categoryTitle: string | null
  ) => {
    if (item && categoryTitle) {
      itemsDispatch(addItemInShoppingList(item, categoryTitle));
      backToShoppingList();
    }
  };
  const onDeleteItem = async (itemId: number | undefined) => {
    if (itemId) {
      await api.delete(`/items/${itemId}`);
      itemsDispatch(deleteItem(itemId));
      backToShoppingList();
    }
  };

  return (
    <div className="item-details">
      <button onClick={backToShoppingList} className="item-details__back">
        back
      </button>
      {item?.imageUrl && (
        <img src={item.imageUrl} alt="#" className="item-details__image" />
      )}
      <div className="item-details__section details-section">
        <h3 className="details-section__title">name</h3>
        <span className="details-section__text details-section__text-name">
          {item?.name}
        </span>
      </div>
      <div className="item-details__section details-section">
        <h3 className="details-section__title">category</h3>
        <span className="details-section__text">{categoryTitle}</span>
      </div>
      {item?.note && (
        <div className="item-details__section details-section">
          <h3 className="details-section__title">note</h3>
          <span className="details-section__text">{item.note}</span>
        </div>
      )}
      <div className="item-details__buttons">
        <button
          onClick={() => {
            onDeleteItem(item?.id);
          }}
          className="item-details__delete"
        >
          delete
        </button>
        <button
          onClick={() => {
            onAddItemInShoppingList(item, categoryTitle);
          }}
          className="item-details__add"
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

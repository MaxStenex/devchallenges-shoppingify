import { useEffect, useContext } from "react";
import api from "../../api";
import {
  addItemInShoppingList,
  setCategories,
  setItemDetailsId,
} from "../../state/items/actions";
import { ItemsContext } from "../../state/items/context";
import "../../styles/components/Products.scss";
import { Category, Product } from "../../types";
import { SidebarComponents } from "../shared/Sidebar";

type Props = {
  changeSidebarComponent: (componentName: SidebarComponents) => void;
};

export const Products: React.FC<Props> = ({ changeSidebarComponent }) => {
  const { itemsState, itemsDispatch } = useContext(ItemsContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await api.get("/categories");
      itemsDispatch(setCategories(res.data));
    };
    fetchCategories();
  }, [itemsDispatch]);

  const onAddItemInShoppingList = (item: Product, categoryTitle: string) => {
    itemsDispatch(
      addItemInShoppingList({ ...item, countInShoppingList: 1 }, categoryTitle)
    );
  };
  const showItemDetails = (itemId: number) => {
    changeSidebarComponent(SidebarComponents.ItemDetails);
    itemsDispatch(setItemDetailsId(itemId));
  };

  return (
    <section className="products">
      <header className="products__header">
        <h2 className="products__title">
          <span>Shoppingify</span> allows you take your shopping list wherever you go
        </h2>
        <input type="text" placeholder="search item" className="products__input" />
      </header>
      <div className="products__lists">
        {itemsState.categories.map((category: Category) => (
          <div key={category.id} className="products__block products-block">
            <h3 className="products-block__title">{category.title}</h3>
            <ul className="products-block__products">
              {category.items.map((product: Product) => (
                <li key={product.id} className="products-block__product">
                  <span
                    onClick={() => {
                      showItemDetails(product.id);
                    }}
                  >
                    {product.name}
                  </span>
                  <button
                    onClick={() => onAddItemInShoppingList(product, category.title)}
                  >
                    <svg
                      height="10px"
                      viewBox="0 0 448 448"
                      width="10px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

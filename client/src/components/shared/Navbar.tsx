import "../../styles/components/Navbar.scss";

import LogoSvg from "../../images/logo.svg";
import CartSvg from "../../images/cart.svg";
import HistorySvg from "../../images/history.svg";
import ItemsSvg from "../../images/items.svg";
import StatisticSvg from "../../images/statistic.svg";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../../state/items/context";

export const Navbar = () => {
  const { itemsState } = useContext(ItemsContext);
  const itemsInCart = itemsState.shoppingList.length;

  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo">
        <img src={LogoSvg} alt="#" />
      </Link>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          <img src={ItemsSvg} alt="#" />
        </Link>
        <Link to="/history" className="navbar__link navbar-link">
          <img src={HistorySvg} alt="#" />
        </Link>
        <Link to="/statistic" className="navbar__link navbar-link">
          <img src={StatisticSvg} alt="#" />
        </Link>
      </div>
      <div className="navbar__cart navbar-cart">
        <img src={CartSvg} alt="#" className="navbar-cart__image" />
        <div className="navbar-cart__count">{itemsInCart ? itemsInCart : "0"}</div>
      </div>
    </div>
  );
};

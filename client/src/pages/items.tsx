import "../styles/pages/items.scss";

import { Navbar } from "../components/shared/Navbar";
import { Products } from "../components/items/Products";
import { AddItem } from "../components/items/AddItem";

const Items = () => {
  return (
    <div className="items-page">
      <Navbar />
      <main className="items-page__main">
        <Products />
        <div className="items-page__sidebar">
          <AddItem />
        </div>
      </main>
    </div>
  );
};

export default Items;

import "../../styles/components/ItemDetails.scss";
import { SidebarComponents } from "./Sidebar";

type Props = {
  changeSidebarComponent: (componentName: SidebarComponents) => void;
};

export const ItemDetails: React.FC<Props> = ({ changeSidebarComponent }) => {
  return (
    <div className="item-details">
      <button
        onClick={() => changeSidebarComponent(SidebarComponents.ShoppingList)}
        className="item-details__back"
      >
        back
      </button>
      <img
        src="https://via.placeholder.com/300/09f/fff.png"
        alt="#"
        className="item-details__image"
      />
      <div className="item-details__section details-section">
        <h3 className="details-section__title">name</h3>
        <span className="details-section__text details-section__text-name">Avocado</span>
      </div>
      <div className="item-details__section details-section">
        <h3 className="details-section__title">category</h3>
        <span className="details-section__text">Fruit and vegetables</span>
      </div>
      <div className="item-details__section details-section">
        <h3 className="details-section__title">note</h3>
        <span className="details-section__text">
          Nutrient-dense foods are those that provide substantial amounts of vitamins,
          minerals and other nutrients with relatively few calories. One-third of a medium
          avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals,
          making it a great nutrient-dense food choice.{" "}
        </span>
      </div>
      <div className="item-details__buttons">
        <button className="item-details__delete">delete</button>
        <button className="item-details__add">Add to list</button>
      </div>
    </div>
  );
};

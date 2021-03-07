import "../../styles/components/ShoppingHistory.scss";
import ArrowSvg from "../../images/right_arrow.svg";

export const ShoppingHistory = () => {
  return (
    <section className="shopping-history">
      <h2 className="shopping-history__title">Shopping history</h2>
      <div className="shopping-history__main">
        <div className="shopping-history__section history-section">
          <h3 className="history-section__title">August 2020</h3>
          <div className="history-section__item">
            <div className="history-section__name">Grocery List</div>
            <div className="history-section__main">
              <div className="history-section__date">Mon 27.8.2020</div>
              <div className="history-section__status">completed</div>
              <img src={ArrowSvg} alt=">" className="history-section__arrow" />
            </div>
          </div>
          <div className="history-section__item">
            <div className="history-section__name">Grocery List</div>
            <div className="history-section__main">
              <div className="history-section__date">Mon 27.8.2020</div>
              <div className="history-section__status">completed</div>
              <img src={ArrowSvg} alt=">" className="history-section__arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

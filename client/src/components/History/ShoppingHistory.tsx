import "../../styles/components/ShoppingHistory.scss";
import ArrowSvg from "../../images/right_arrow.svg";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HistoryContext } from "../../state/history/context";

export const ShoppingHistory = () => {
  const { historyState } = useContext(HistoryContext);

  return (
    <section className="shopping-history">
      <h2 className="shopping-history__title">Shopping history</h2>
      <div className="shopping-history__main">
        <div className="shopping-history__section history-section">
          {historyState.map((shoppingHistory) => (
            <div key={shoppingHistory.id} className="history-section__item">
              <div className="history-section__name">{shoppingHistory.name}</div>
              <div className="history-section__main">
                <div className="history-section__date">
                  {new Date(shoppingHistory.createdAt).toLocaleDateString()}
                </div>
                <div
                  className={`history-section__status ${
                    shoppingHistory.status === "cancelled"
                      ? "history-section__status--cancelled"
                      : ""
                  }`}
                >
                  {shoppingHistory.status}
                </div>
                <Link
                  className="history-section__arrow"
                  to={`/history/${shoppingHistory.id}`}
                >
                  <img src={ArrowSvg} alt=">" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

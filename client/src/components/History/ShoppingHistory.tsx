import "../../styles/components/ShoppingHistory.scss";
import ArrowSvg from "../../images/right_arrow.svg";
import { useEffect, useState } from "react";
import api from "../../api";
import { ShoppingHistoryType } from "../../types";

export const ShoppingHistory = () => {
  const [shoppingHistories, setShoppingHistories] = useState<ShoppingHistoryType[]>([]);
  useEffect(() => {
    const fetchHistories = async () => {
      const res = await api.get("/shopping-history");
      setShoppingHistories(res.data);
    };
    fetchHistories();
  }, []);

  return (
    <section className="shopping-history">
      <h2 className="shopping-history__title">Shopping history</h2>
      <div className="shopping-history__main">
        <div className="shopping-history__section history-section">
          {shoppingHistories.map((shoppingHistory) => (
            <div key={shoppingHistory.id} className="history-section__item">
              <div className="history-section__name">{shoppingHistory.name}</div>
              <div className="history-section__main">
                <div className="history-section__date">
                  {new Date(shoppingHistory.createdAt).toLocaleDateString()}
                </div>
                <div className="history-section__status">{shoppingHistory.status}</div>
                <img src={ArrowSvg} alt=">" className="history-section__arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

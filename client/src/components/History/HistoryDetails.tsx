import { useContext, useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { HistoryContext } from "../../state/history/context";
import "../../styles/components/HistoryDetails.scss";
import { ShoppingHistoryType } from "../../state/history/context";
import { Category } from "../../types";

export const HistoryDetails: React.FC<RouteComponentProps<{ historyId: string }>> = ({
  match,
}) => {
  const [historyDetails, setHistoryDetails] = useState<ShoppingHistoryType>();
  const [categories, setCategories] = useState<Category[]>([]);
  const { historyState } = useContext(HistoryContext);
  useEffect(() => {
    const historyId = parseInt(match.params.historyId);
    const history = historyState.find((h) => h.id === historyId);
    if (history) {
      const sortedCategories = history.items.reduce<Category[]>((acc, curr) => {
        const existingCategory = acc.find((c) => c.id === curr.category.id);
        if (existingCategory) {
          existingCategory.items.push({
            id: curr.id,
            name: curr.name,
            note: curr.note,
            imageUrl: curr.imageUrl,
          });
        } else {
          acc.push({
            id: curr.category.id,
            title: curr.category.title,
            items: [curr],
          });
        }
        return acc;
      }, []);
      setCategories(sortedCategories);
      setHistoryDetails(history);
    }
  }, [historyState, match.params.historyId]);

  return (
    <section className="history-details">
      <Link to="/history" className="history-details__back">
        back
      </Link>
      <h2 className="history-details__title">{historyDetails?.name}</h2>
      <div className="history-details__date">
        {new Date(historyDetails?.createdAt || 0).toLocaleDateString()}
      </div>
      <ul className="history-details__categories">
        {categories.map((category) => (
          <li key={category.id} className="history-details__category history-category">
            <h3 className="history-category__title">{category.title}</h3>
            <ul className="history-category__products">
              {category.items.map((item) => (
                <li key={item.id} className="history-category__product">
                  {item.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

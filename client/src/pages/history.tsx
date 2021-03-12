import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import api from "../api";
import { HistoryDetails } from "../components/History/HistoryDetails";
import { ShoppingHistory } from "../components/History/ShoppingHistory";
import { Navbar } from "../components/shared/Navbar";
import { Sidebar, SidebarComponents } from "../components/shared/Sidebar";
import { HistoryContext } from "../state/history/context";
import { useSidebarState } from "../utils/useSidebarState";

const History = () => {
  const [shoppingHistories, setShoppingHistories] = useState([]);
  useEffect(() => {
    const fetchHistories = async () => {
      const res = await api.get("/shopping-history");
      setShoppingHistories(res.data);
    };
    fetchHistories();
  }, []);

  const { sidebarComponentName, setSidebarComponentName } = useSidebarState();
  const changeSidebarComponent = (componentName: SidebarComponents) => {
    setSidebarComponentName(componentName);
  };

  return (
    <HistoryContext.Provider
      value={{ historyState: shoppingHistories, historyDispatch: setShoppingHistories }}
    >
      <div className="page">
        <Navbar />
        <main className="page__main">
          <Switch>
            <Route exact path="/history" component={ShoppingHistory} />
            <Route exact path={`/history/:historyId`} component={HistoryDetails} />
          </Switch>
          <div className="page__sidebar">
            <Sidebar
              componentName={sidebarComponentName}
              changeComponent={changeSidebarComponent}
            />
          </div>
        </main>
      </div>
    </HistoryContext.Provider>
  );
};

export default History;

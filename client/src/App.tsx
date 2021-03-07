import "./styles/_normalize.scss";
import "./styles/global.scss";

import { Redirect, Route, Switch } from "react-router";
import Items from "./pages/items";
import History from "./pages/history";
import { useReducer } from "react";
import { ItemsContext } from "./state/items/context";
import { itemsReducer, itemsInitialState } from "./state/items/reducer";

const App = () => {
  const [itemsState, itemsDispatch] = useReducer(itemsReducer, itemsInitialState);

  return (
    <ItemsContext.Provider value={{ itemsState, itemsDispatch }}>
      <Switch>
        <Route path="/items" component={Items} />
        <Route path="/history" component={History} />
        <Route path="/" render={() => <Redirect to="/items" />} />
      </Switch>
    </ItemsContext.Provider>
  );
};

export default App;

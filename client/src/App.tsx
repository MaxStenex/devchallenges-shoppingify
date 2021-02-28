import "./styles/_normalize.scss";
import "./styles/global.scss";

import { Redirect, Route, Switch } from "react-router";
import Items from "./pages/items";

const App = () => {
  return (
    <Switch>
      <Route path="/items" render={Items} />
      <Route path="/" render={() => <Redirect to="/items" />} />
    </Switch>
  );
};

export default App;

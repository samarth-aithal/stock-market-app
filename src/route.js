import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/home/home";
import View from "./components/view/view";


function AppRoute() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/view" component={View} />
      </Switch>
    </div>
  );
}

export default AppRoute;

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/home/home";
import View from "./components/view/view";
import Nav from "../src/components/common/navbar";

function AppRoute() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/view" component={View} />
      </Switch>
    </div>
  );
}

export default AppRoute;

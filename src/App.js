import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./common/Menu";
import Header from "./common/Header";
import Home from "./home/Home";
import Cart from "./cart/Cart";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/cart">
            <Menu />
            <Header />
            <Cart />
          </Route>
          <Route exact path="/">
            <Menu />
            <Header />
            <Home />
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Insert from "./components/Insert";
import Edit from "./components/Edit";
import View from "./components/View";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/insert" exact component={Insert} />
        <Route path="/edit/:id" exact component={Edit} />
        <Route path="/view" exact component={View} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Custom.css';
import Home from "./components/Home/Home";
import TeamInfo from "./components/TeamInfo/TeamInfo";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/details/:teamId">
          <TeamInfo />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

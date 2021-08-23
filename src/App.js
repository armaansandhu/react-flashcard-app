import React from "react";
import PracticePage from "./components/PracticePage";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AddCard } from "./components/AddCard";

function App() {
  return (
    <Router>
      <header className="header">
        <nav>
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/createList" className="nav-item">
            Add Card
          </Link>
          <Link to="/practice" className="nav-item">
            Practice
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/practice/" component={PracticePage} />
        <Route path="/createList" component={AddCard} />

        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* Route for the home page */}
          <Route path="/" exact>
            <Home />
          </Route>
          {/* Route for the search(results) page */}
          <Route path="/search">
            <SearchPage />
          </Route>
          {/* Routes for all pages not implemented yet */}
          <Route
            path="/about"
            component={() => <h2>About page not implemented yet :(</h2>}
          />
          <Route
            path="/store"
            component={() => <h2>Store page not implemented yet :(</h2>}
          />
          <Route
            path="/gmail"
            component={() => <h2>Gmail page not implemented yet :(</h2>}
          />
          <Route
            path="/images"
            component={() => <h2>Images page not implemented yet :(</h2>}
          />
          <Route
            path="/all"
            component={() => <h2>'All' page not implemented yet :(</h2>}
          />
          <Route
            path="/news"
            component={() => <h2>News page not implemented yet :(</h2>}
          />
          <Route
            path="/shopping"
            component={() => <h2>Shopping page not implemented yet :(</h2>}
          />
          <Route
            path="/maps"
            component={() => <h2>Maps page not implemented yet :(</h2>}
          />
          <Route
            path="/more"
            component={() => <h2>'More' page not implemented yet :(</h2>}
          />
          <Route
            path="/settings"
            component={() => <h2>Settings page not implemented yet :(</h2>}
          />
          <Route
            path="/tools"
            component={() => <h2>Tools page not implemented yet :(</h2>}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

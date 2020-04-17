import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio"
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path={["/", "/home"]} component={Portfolio}>
            <Portfolio />
          </Route>
          {/* <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

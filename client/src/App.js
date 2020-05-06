import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home}/>
        
          <Route exact path="/portfolio" component={Portfolio}/>
          
          <Route exact path="/contact" component={Contact}/>
           
        </Switch>
      </div>
    </Router>
  );
}

export default App;

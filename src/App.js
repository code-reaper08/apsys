//import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./container/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import Index from "./container/index";


function App() {
  return (
  
    
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/index" component={Index} />
      </Switch>
    </Router>
  );
}
export default App;

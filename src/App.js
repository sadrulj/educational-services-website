import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./component/FontAwesomeIcons/FontAwesomeIcons";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
import About from "./component/About/About";
import Teachers from "./component/Teachers/Teachers";
import NotFound from "./component/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

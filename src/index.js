import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// import Contactform from "./components/Contactform";
import Home from "./containers/Home.js";
import Portfolio from "./containers/Portfolio.js";
import Skills from "./containers/Skills.js";
import Contact from "./containers/Contact.js";
import { Switch, BrowserRouter, Route } from "react-router-dom";

// import data from "./db";
const backgroundPath = window.location.origin + "/imgs/smoke.png";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <div
      className="mainContainer"
      style={{
        backgroundImage: `url(${backgroundPath})`
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

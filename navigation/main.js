import { Switch, Route } from "react-router-dom";
import Home from "../Pages/home";
import About from "../components/home/about";
import Contact from "../components/home/contact";
import Projects from "../components/home/projects";
import ChatUp from "../Pages/Projects/chatup";
import Adopy from "../Pages/Projects/adopy";
import Tasker from "../Pages/Projects/tasker";
import SaveJack from "../Pages/Projects/savejack";
import Picker from "../Pages/Projects/picker";
import OnePlaceNews from "../Pages/Projects/oneplacenews";
import LectShares from "../Pages/Projects/lectshares";
import React, { Component } from "react";
import Networkers from "../Pages/Projects/networkers";
import Purchase from "../Pages/Purchase";
import Orders from "../components/orders";
import Shop from "../Pages/shop";
import ShoppingCart from "../Pages/shoppingCart";

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Projects" component={Projects} />
          <Route path="/ChatUp" component={ChatUp} />
          <Route path="/Adopy" component={Adopy} />
          <Route path="/Tasker" component={Tasker} />
          <Route path="/SaveJack" component={SaveJack} />
          <Route path="/Picker" component={Picker} />
          <Route path="/OnePlaceNews" component={OnePlaceNews} />
          <Route path="/LectShares" component={LectShares} />
          <Route path="/Networkers" component={Networkers} />
          <Route path="/Purchas" component={Purchase} />
          <Route path="/Orders" component={Orders} />
          <Route path="/Shop" component={Shop} />
          <Route path="/ShoppingCart" component={ShoppingCart} />

          <Route component={Home} />
        </Switch>
        ;
      </div>
    );
  }
}

export default Main;

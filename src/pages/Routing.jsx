import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from './../components/navbar';
import Home from './index';
import Contact from './contact';
import About from './about';
import Buttons from './../components/buttons'
import NewComponent from './Login'
import Todo from './Todo'
import "./../App.css"
import LifeCycle from "./LifeCycle";


function Routing() {

    return (
        <div className="main" >

        <Router>
          <Navbar />
  
            <Route exact path="/">
              <Home />
              <LifeCycle />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
          </Route>

        </Router>

    </div>

    )
   
}




export default Routing;
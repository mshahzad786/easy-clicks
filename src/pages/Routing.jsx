import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from './../components/navbar';
import Home from './index';
import Contact from './contact';
import About from './about';
import Buttons from './../components/buttons'
import NewComponent from './Apps/Login'
import Todo from './Apps/Todo'
import "../App.css"
import LifeCycle from "./Apps/LifeCycle";


function Routing() {

    return (
        <div className="main" >

        <Router>
          <Navbar />
  
            <Route exact path="/">
              <Home />
              <Buttons/>
              <LifeCycle />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
          </Route>
            <Route path="/Todo">
              <Todo />
          </Route>

        </Router>

    </div>

    )
   
}




export default Routing;
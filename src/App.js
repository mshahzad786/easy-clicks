import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/index';
import Contact from './pages/contact';
import About from './pages/about';
import Buttons from './components/buttons'
import NewComponent from './pages/Login'
import Todo from './pages/Todo'
import "./App.css"








function App() {

  return (
    <div className="main" >

        <Router>
          <Navbar />
          <Route exact path="/">
            <Home />
            <Todo />
          </Route>
          <Route path="/contact">
            <Contact />

          </Route>
          <Route path="/about">
            <About />
          </Route>

        </Router>

    </div>

  );
}


export default App;

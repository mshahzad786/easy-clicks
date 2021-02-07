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
import Apps from './pages/Apps' ;








function App() {

  return (
    <div className="main" >

        <Router>
          <Navbar />
          <Route exact path="/">
<<<<<<< HEAD
            <Home />
            <Todo />
=======
              <Home />
              <Apps />
            </Route>
            <Route path="/contact">
              <Contact />
              <Test/>
            </Route>
            <Route path="/about">
              <About />
>>>>>>> f496b3009005ef256ae80b2449bcb06bb4900438
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

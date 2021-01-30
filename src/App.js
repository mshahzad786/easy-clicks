import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/index';
import Contact from './pages/contact';
import About from './pages/about';
import Buttons from './components/buttons'
import Test from './pages/test'
import NewComponent from './pages/Login'








function App() {

  return (
    <Router>


      <div>

        <Navbar/>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
            <Test/>
          </Route>
          <Route path="/about">
            <About />
        </Route>

        <Buttons/>
        
      </div>
     </Router>
    
    
  );
  

}


export default App;

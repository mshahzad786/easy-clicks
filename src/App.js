import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/index';
import Tome from 'Tome';
import Contact from './pages/contact';
import About from './pages/about';
import Buttons from './components/buttons'



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
          </Route>
          <Route path="/about">
            <About />
        </Route>

            <Buttons/>
        
      </div>
      
      <Tome />
    </Router>
    
  );
  

}








export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css"
import Routing from './pages/Routing' ;
import {Provider} from 'react-redux'
import store from './store'



function App() {

  return (

    <Provider store={store}>

      <Routing/>
    </Provider>
    

  );
}



export default App;


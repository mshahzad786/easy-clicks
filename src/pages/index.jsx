import React from "react";
import Buttons from './../components/buttons';
import Bg from "./../images/home page/home.png"
import { Link } from "react-router-dom";
import Todo from './Todo'




function Home() {


  return (


    <div>
      <h1> This Is Home </h1>
      <img src={Bg} alt="" width="600" />
      <div>

      <Link to="../Todo">
      <button type="button" className="btn btn-outline-primary">Todo App Class Components</button>
      </Link>
      </div>
    </div>

  )
}

export default Home;

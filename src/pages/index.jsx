import React from "react";
import { BrowserRouter as Link} from "react-router-dom";
import Bg from "./../images/home page/home.png"
import TodoCC from "./../images/apps images/Todo Class Component.gif"





function Home() {


  return (


    <div>
      <h1> This Is Home </h1>

      {/* <img src={Bg} alt="" width="500" /> */}
      <div>

        <Link to="./Todo">

       <button type="button" className="btn btn-light"><img src={TodoCC} alt="" width="200" /></button>
        </Link>
       <h6>TodoApp Class Component</h6>
      </div>

    </div>

  )
}

export default Home;

import React from "react";
<<<<<<< HEAD
import { Link} from "react-router-dom";
import Bg from "./../images/home page/home.png"
import TodoCC from "./../images/apps images/Todo Class Component.gif"

=======
import { BrowserRouter as Link} from "react-router-dom";
import Bg from "./../images/home page/home.png"
<<<<<<< HEAD
import TodoCC from "./../images/apps images/Todo Class Component.gif"
=======
import { Link } from "react-router-dom";
import Todo from './Todo'
>>>>>>> f496b3009005ef256ae80b2449bcb06bb4900438
>>>>>>> dc5f1668b3ad6002de58a472cd0832db1a7cac88




function Home() {


  return (


    <div>
      <h1> This Is Home </h1>
<<<<<<< HEAD
      {/* <img src={Bg} alt="" width="500" /> */}

=======
<<<<<<< HEAD
      <img src={Bg} alt="" width="500" />

      <div>
       
          <button type="button" className="btn btn-light"><img src={TodoCC} alt="" width="200" /></button>

        <h6>TodoApp Class Component</h6>
      </div>

=======
      <img src={Bg} alt="" width="600" />
>>>>>>> dc5f1668b3ad6002de58a472cd0832db1a7cac88
      <div>
        <Link to="./Todo">

       <button type="button" className="btn btn-light"><img src={TodoCC} alt="" width="200" /></button>
        </Link>
       <h6>TodoApp Class Component</h6>
      </div>
<<<<<<< HEAD



=======
>>>>>>> f496b3009005ef256ae80b2449bcb06bb4900438
>>>>>>> dc5f1668b3ad6002de58a472cd0832db1a7cac88
    </div>

  )
}

export default Home;

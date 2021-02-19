import React from "react";
import { Link } from "react-router-dom";
import TodoCC from "./../../images/apps images/Todo Class Component.gif"



function Apps() {

    return (
      <div>

            <Link to="./Todo">
                <button type="button" className="btn btn-light"><img src={TodoCC} alt="" width="200" /></button>
            </Link>
            <div>
                <h6>TodoApp Class Component</h6>
            </div>
      </div>
            

    )
   
}




export default Apps;
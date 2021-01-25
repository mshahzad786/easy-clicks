import React from "react";
import { Link } from "react-router-dom";


function Submit() {

  return(
      <Link to="./contact">
      <Link to="./">
          <button type="submit">Home</button>
      </Link>
          <button type="submit">contact</button>
      <Link to="./about">
          <button type="submit">about</button>
      </Link>
      </Link>
     
      )
      
}
    


export default Submit;

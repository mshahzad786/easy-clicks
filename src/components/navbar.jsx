import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return(

    
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary container-fluid">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://youtu.be/cVyTj0MOgfs">EASY CLICK's</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="./contact" class="nav-link">Contact</Link>
        </li>
        <li class="nav-item">
          <Link to="./about" class="nav-link">About</Link>
        </li>
        <li>

      <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
        </li>
      </ul>
    </div>
  </div>
</nav>
    

    
  )


}

{/* <li class="nav-item">
          <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="./contact" class="nav-link">Contact</Link>
        </li>
        <li class="nav-item">
          <Link to="./about" class="nav-link">About</Link>
        </li> */}

export default Navbar;
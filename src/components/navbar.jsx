import React from "react";
import { Link } from "react-router-dom";



function Navbar() {

  return(
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary container-fluid">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://youtu.be/cVyTj0MOgfs">EASY CLICK's</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="./contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="./about" className="nav-link">About</Link>
        </li>
        <li>

      <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
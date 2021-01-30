import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/home page/home page logo.png"



function Navbar() {

  return (



    <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid ">
      <div className="container-fluid ">
        <a className="navbar-brand" href="https://youtu.be/cVyTj0MOgfs">
          <img src={logo} alt="" width="80px" />
        </a>
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
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-1" type="submit">Search</button>
              </form>
            </li>
          </ul>
        </div>
      </div>

    </nav>

  )

}


export default Navbar;
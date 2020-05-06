import React from "react";
import { Link } from "react-router-dom";
import "./style.css"



function NavBar () {
  return (<>
    <nav className="navStyle fixed-bottom navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/home"
              className={
                (window.location.pathname === "/home")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home 
              </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                (window.location.pathname === "/portfolio")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Works
              </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                (window.location.pathname === "/contact")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Connect
              </Link>
          </li>
        </ul>
      </div>
  

      </div>
      <div id="navIcons">
        <a href="https://www.linkedin.com/in/briana-gabiola" rel="noopener noreferrer" target="_blank"> <i className="navIcon fa fa-linkedin-square"></i></a>
        <a href="https://github.com/BriGab" rel="noopener noreferrer" target="_blank"> <i className="navIcon fa fa-github"></i></a>
      </div>

    </nav>
  </>)

};

export default NavBar;

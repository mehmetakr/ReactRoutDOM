import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return(

  <footer className="footer" style={{backgroundColor:"gray"}}>
    <div className="container">
      <nav className="d-flex justify-content-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/aboute"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Aboute
        </NavLink>
        <NavLink
          to={"/Products"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>
        <NavLink
          to={"/Posts"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Posts
        </NavLink>  
      </nav>
    </div>
  </footer>
  )
};
export default Footer;

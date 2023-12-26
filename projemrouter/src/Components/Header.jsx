import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-4">
          <div className="logo">
            <NavLink to={"/"}>E-Commerce</NavLink>
          </div>

          <div className="nav nav-pills">
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
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

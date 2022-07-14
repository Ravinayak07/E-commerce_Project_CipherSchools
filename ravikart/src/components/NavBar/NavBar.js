import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";

function NavBar() {
  return (
    <div className="navbar_container">
      <div className="navbar_left">
        <img src={logo} />
        <a href="/">Ravikart</a>
      </div>

      <div className="navbar_right">
        <div className="navbar_search">
          <input placeholder="Search Here...." />
          <button>search</button>
        </div>

        <p>Orders</p>
        <p>My cart</p>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default NavBar;

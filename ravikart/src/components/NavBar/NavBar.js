import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import Button from "../../Global/Button/Button";
import { useNavigate } from "react-router-dom";


function NavBar({ ShowSignInButton }) {
  const navigate = useNavigate();
  function goToSignInPage() {
    navigate("/sign-in");
  }
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
        {ShowSignInButton === false ? (
        " "
      ) : (
        <Button text="Sign In" onClicking={goToSignInPage} />
      )}
      </div>
    </div>
  );
}

export default NavBar;





 

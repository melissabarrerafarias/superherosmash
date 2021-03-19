import React from "react";
import Auth from "../../utils/auth"; //function to logout
import image from "../../../src/img/1hulk.png";

const NavBar = () => {

  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div className="menu" id="navbar">
        <div className="ui secondary menu">
       <a className="item" id="home-title" name="home" href="/">
             
        <img src={image}
        alt="Hulk smash!"
        >
         </img>
         SuperHeroSmash
          </a>
          
          {Auth.isLoggedIn() ? ( //if user is logged in - render
            <>
              <a className="item" id="logout" href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            //else - render
            <>
              <a className="item" id="login-id" name="login" href="/login">
                Login
              </a>
              <a className="item" id="signup-id" name="signup" href="/signup">
                Signup
              </a>
            </>
          )}
       
        </div>
      </div>
    </header>
  );
};

export default NavBar;

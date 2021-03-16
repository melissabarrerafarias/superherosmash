import React from "react";
// import { Link } from "react-router-dom"; <-- IMPORT NEVER USED
// import Home from "../../pages/Home"; <-- IMPORT NEVER USED
import Auth from "../../utils/auth"; //function to logout
//import BattleGround from "../../components/BattelgroundMock"; //<-- IMPORT NEVER USED

const NavBar = () => {
<<<<<<< HEAD
    const logout = e => {
        e.preventDefault();
        Auth.logout();
    };

    return (
        <header>
            <div className="menu">
              
            <div className ='ui secondary menu'>    
                        {Auth.isLoggedIn() ? ( //if user is logged in - render
                        <>
                            <a className="item" id="logout" href="/" onClick={logout}>
                                Logout
                            </a>
                            <a className="item" id="home-id" name="home" href="/">Home </a>
                            <a className ="item" id="battle-id" name="Battle" href ="/BattleGround">Battle Ground</a>
                            <a className= "item" id="discuss-id" name="discuss" href='/discussionboard'>Discussion</a>
                            <a className="item" id="donate-id" name="donate" href="/mythreads/:username?">My Threads</a>
                            <a className="item" id="donate-id" name="donate" href="/">Donate</a>


                        </>
                    ) : ( //else - render 
                        <>
                            <a className="item" id="home-id" name="home" href="/">Home </a>
                            <a className= "item" id="login-id" name="login" href="/login">Login</a>
                            <a className="item" id="signup-id" name ="signup" href="/signup">Signup</a>
                            <a className ="item" id="battle-id" name="Battle" href ="/BattleGround">BattleGround</a>
                            <a className= "item" id="discuss-id" name="discuss" href='/discussionboard'>Discussion</a>
                            <a className="item" id="donate-id" name="donate" href="/checkout">Donate</a>
=======
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };
>>>>>>> develop

  return (
    <header>
      <div className="menu">
        <div className="ui secondary menu">
          
          {Auth.isLoggedIn() ? ( //if user is logged in - render
            <>
              <a className="item" id="logout" href="/" onClick={logout}>
                Logout
              </a>
              <a className="item" id="home-id" name="home" href="/">
                Home{" "}
              </a>
            </>
          ) : (
            //else - render
            <>
              <a className="item" id="home-id" name="home" href="/">
                Home{" "}
              </a>
              <a className="item" id="login-id" name="login" href="/login">
                Login
              </a>
              <a className="item" id="signup-id" name="signup" href="/signup">
                Signup
              </a>
              {/* <a className="item" id="donate-id" name="donate" href="/">
                Donate
              </a> */}
            </>
          )}
       
        </div>
      </div>
    </header>
  );
};

export default NavBar;

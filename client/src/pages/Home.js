import React from "react";
import Marvel from '../../src/img/marvel.png'
import Loki from '../../src/img/loki.png';
import Antman from '../../src/img/antman.png'
import Deadpool from '../../src/img/deadpool.png';
import '../../src/home.css'



const Home = () => {
  return (
    <body className="image">
      {/* <div className="home"> */}
        <div className="buttons">
          <div className="fade-in">
            <section className="hero-section">
              <div className="cgrid">
                <a className="home-card" href="#">
                  <div className="cardbg">
                    <img id="img" src={Marvel}></img>
                  <div className="content">
                    <h3 className="textcard">Stats</h3>
                  </div>
                  </div>
                </a>
                <a className="home-card" href="/battleground">
                  <div className="cardbg">
                   <img id="img" src={Loki}></img> 
                  <div className="content">
                    <h3 className="textcard">BattleGround!</h3>
                  </div>
                  </div>
                </a>
                <a className="home-card" href="/discussionboard">
                  <div className="cardbg">
                    <img id="img" src={Antman}></img>
                  <div className="content">
                    <h3 className="textcard">Discussion!</h3>
                  </div>
                  </div>
                </a>

                <a className="home-card" href="/Login">
                  <div className="cardbg">
                    <img id="img"src={Deadpool}></img>
                    <div className="content">
                      <h3 className="textcard">Login/Signup</h3>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      {/* </div> */}
    </body>
  );
};

export default Home;



import React from "react";
import Marvel from '../../src/img/5.png';
import Vision from '../../src/img/k.png';
import Panther from '../../src/img/13.png'
import Hulk from '../../src/img/22.png'


const Home = () => {
  return (
    <body className="image">
      <div className="home">
        <div className="buttons">
          <div className="fade-in">
            <section className="hero-section">
              <div className="cgrid">
                <a className="card" href="#">
                  <div className="cardbg">
                    <img id="img" src={Hulk}></img>
                  <div className="content">
                    <h3 className="textcard">Stats</h3>
                  </div>
                  </div>
                </a>
                <a className="card" href="/BattleGround">
                  <div className="cardbg">
                   <img id="img" src={Marvel}></img> 
                  <div className="content">
                    <h3 className="textcard">BattleGround!</h3>
                  </div>
                  </div>
                </a>
                <a className="card" href="/#">
                  <div className="cardbg">
                    <img id="img" src={Panther}></img>
                  <div className="content">
                    <h3 className="textcard">Discussion!</h3>
                  </div>
                  </div>
                </a>

                <a className="card" href="/Login">
                  <div className="cardbg">
                    <img id="img"src={Vision}></img>
                    <div className="content">
                      <h3 className="textcard">Login/Signup</h3>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;



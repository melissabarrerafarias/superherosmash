import React from "react";
import { useSpring, animated as a } from "react-spring";
import Auth from "../../utils/auth";

import HeroCard from "./Herocard";
import "./style.css";
//to get the data for heros

// propdrilling setters and heros from battleground
// set the setter of hero card 1 to setter for 2 so the opponent is changed when vote is clicked
const Arena = ({ heros, setters }) => {
  const props = useSpring({ margin: 0, from: { margin: -1000 } });
  console.log("Arena Rendered");
  console.log(heros);
  const loggedIn = Auth.isLoggedIn();

  if (!loggedIn) {
    return <h4 className="notLoggedIn">You need to be logged in to play!</h4>;
  }

  return (
    <>
      <div className="battle-description">
        Vote for your favorite superhero in each matchup. The winner gets a vote added to their total and stays to battle the next opponent.
        <br />
        <br />
        When you're done in the Battleground, see how your choices are doing on the Leaderboard or head to
        the Discussion area to make your case!
      </div>
      <div class="Arena">
        <a.div style={props} class="RingCorner" key={Date.now() + heros[0].id}>
          <HeroCard hero={heros[0]} setNew={setters.setHeroId2} />
          {/* <span class="bigRedButton">Vote</span> */}
        </a.div>
        <a.div style={props} class="RingCorner" key={Date.now() + heros[1].id}>
          <HeroCard hero={heros[1]} setNew={setters.setHeroId1} />
        </a.div>

        {/* {heros.map((hero) => {
          return (
            <a.div style={props} class="RingCorner" key={Date.now() + hero.id}>
            <HeroCard hero={hero} setters = {setters} />
            <span class="bigRedButton">Vote!</span>
            </a.div>
            );
          })} */}
      </div>
    </>
  );

  // return (
  //   <div className="Arena">
  //     {heros.map(hero => {
  //       return (
  //         <a.div style={props} className="RingCorner" id={hero.name} key = {Date.now() + hero.id}>
  //           <HeroCard hero = {hero} />
  //           <span className="bigRedButton" onClick={clickVote}>Vote!</span>
  //         </a.div>
  //       );
  //     })}
  //   </div>
  // );
};

export default Arena;

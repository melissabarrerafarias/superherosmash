import React from "react";
import { useSpring, animated as a } from "react-spring";

import HeroCard from "./Herocard";
import "./style.css";
//to get the data for heros

// propdrilling setters and heros from battleground
// set the setter of hero card 1 to setter for 2 so the opponent is changed when vote is clicked
const Arena = ({ heros, setters }) => {

  const props = useSpring({ margin: 0, from: { margin: -1000 } });
  console.log("Arena Rendered");
  console.log(heros);
  return (
    <div class="Arena">
          <a.div style={props} class="RingCorner" key={Date.now() + heros[0].id}>
            <HeroCard hero={heros[0]} setNew = {setters.setHeroId2}  />
            <span class="bigRedButton">Vote!</span>
          </a.div>
          <a.div style={props} class="RingCorner" key={Date.now() + heros[1].id}>
            <HeroCard hero={heros[1]} setNew = {setters.setHeroId1} />
            <span class="bigRedButton">Vote!</span>
          </a.div>
        );

      {/* {heros.map((hero) => {
        return (
          <a.div style={props} class="RingCorner" key={Date.now() + hero.id}>
            <HeroCard hero={hero} setters = {setters} />
            <span class="bigRedButton">Vote!</span>
          </a.div>
        );
      })} */}
    </div>
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

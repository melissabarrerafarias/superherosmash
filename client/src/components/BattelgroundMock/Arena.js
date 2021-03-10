import React from "react";
import { useSpring, animated as a } from "react-spring";

import HeroCard from "./Herocard";
import "./style.css";
//to get the data for heros

const Arena = ({ heros }) => {
  const props = useSpring({ margin: 0, from: { margin: -1000 } });
  console.log("Arena Rendered");
  console.log(heros);
  return (
    <div class="Arena">
      {heros.map((hero) => {
        return (
          <a.div style={props} class="RingCorner" key={Date.now() + hero.id}>
            <HeroCard hero={hero} />
            <span class="bigRedButton">Vote!</span>
          </a.div>
        );
      })}
    </div>
  );
};

export default Arena;

import React, {useState} from "react";
import { useSpring, animated  as a } from 'react-spring';

import HeroCard from "./Herocard";
import "./style.css";

const Arena = ({ heros }) => {

  const [player1, setPlayer1] = useState()
  const [player2, setPlayer2] = useState()


  const clickVote = (e) => {
    e.preventDefault();
    console.log("Vote clicked on " + e.target.id)
  } 

  const props = useSpring({margin: 0, from:  {margin: -1000}})


  return(
    <div className="Arena">
      <a.div style={props} className="RingCorner1" key = {Date.now() + heros[0].id}>
            <HeroCard hero={heros[0]} />
            <span className="bigRedButton" id="arena1" onClick={clickVote}>Vote!</span>
      </a.div>

      <a.div style={props} className="RingCorner2" key = {Date.now() + heros[1].id}>
            <HeroCard hero={heros[1]} />
            <span className="bigRedButton" id="arena2" onClick={clickVote}>Vote!</span>
      </a.div>

    </div>
  );
};

export default Arena;

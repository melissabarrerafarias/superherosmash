import React, {useState} from "react";
import { useSpring, animated  as a } from 'react-spring';

import HeroCard from "./Herocard";
import "./style.css";
//to get the data for heros

const Arena = ({ heros }) => {
  
  const [playerIndex, setPlayerIndex] = useState(2)
  const [player1, setPlayer1] = useState(heros[0])
  const [player2, setPlayer2] = useState(heros[1])
  const [voted1, setVoted1] = useState(false)
  const [voted2, setVoted2] = useState(false)

  let n = 2;

  const clickPlayer1 = () => {
    setPlayer1(heros[playerIndex])
    setPlayerIndex(playerIndex+1)
    setVoted1(true)
  }  
  
  const clickPlayer2 = () => {
    setPlayer2(heros[playerIndex])
    setPlayerIndex(playerIndex+1)
    setVoted2(true)
  }




  const props = useSpring({margin: 0, from:  {margin: -1000}})


  return(
    <div className="Arena">
      <a.div style={props} className="RingCorner" key = {Date.now() + player1.id}>
            <HeroCard hero={player1} voted={voted1} setVoted = {setVoted1}  />
            <span className="bigRedButton" id="arena1" onClick={clickPlayer1}>Vote!</span>
      </a.div>

      <a.div style={props} className="RingCorner" key = {Date.now() + player2.id}>
            <HeroCard hero={player2} voted={voted2} setVoted = {setVoted2} />
            <span className="bigRedButton" id="arena2" onClick={clickPlayer2}>Vote!</span>
      </a.div>

    </div>
  );
};

export default Arena;

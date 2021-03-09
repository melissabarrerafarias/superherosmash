import React from "react";
import superman from "./superman.jpg";
import "./card.css";
import getHeros from "../../utils/getHeros";
const Card = () => {
  return (
    <div className="card">
      <img src={superman}></img>
    </div>
  );
};

export default Card;

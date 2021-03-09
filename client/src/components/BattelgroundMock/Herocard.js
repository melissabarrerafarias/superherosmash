import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HEROS } from "../../utils/queries";

const HeroCard = (hero) => {
  const { loading, data } = useQuery(QUERY_HEROS);
  if (loading) {
    return <p>Still loadding</p>;
  } else {
    return (
      <div className="HeroCard">
        Hero Name: {data.getAllHeros.name} <br></br>
        Hero strength: {data.getAllHeros.strength}
        <br></br>
        Hero durability: {data.getAllHeros.durability}
        <br></br>
        Hero power: {data.getAllHeros.power}
        <br></br>
        Hero combat: {data.getAllHeros.combat}
        <br></br>
        <img
          style={{ width: "100px", height: "100px" }}
          src={data.getAllHeros.imgurl}
        ></img>
      </div>
    );
  }
};

export default HeroCard;

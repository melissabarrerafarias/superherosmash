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
        Hero Name: {data.getAllHeros.name} Hero Id: {hero.id}
      </div>
    );
  }
};

export default HeroCard;

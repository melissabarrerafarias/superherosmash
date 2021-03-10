
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HEROS } from "../../utils/queries";
import { useSpring, animated  as a } from 'react-spring';




const HeroCard = ({ hero,voted, setVoted }) => {

  const props = useSpring({
    to: async (next,cancel) => {
      await next({width:'300px', color:'blue'})
      await next({color:'red'})
     
    },

    from: {width: '0px'}
  
  
  
  
  })

  const { loading, data } = useQuery(QUERY_HEROS);
  if (loading) {
    return <p>Still loading</p>;
  } else {
    console.log("This heros name is ");
    console.log(hero);

    // if voted animate the card style = {voted ? props: {}}
    return (
      <a.div className="HeroCard" style = {voted ? props: {}}> 
        Hero Name: {hero.name} <br></br>
        Hero Id:<br></br>
        Hero strength: {hero.strength}
        <br></br>
        Hero durability: {hero.durability}
        <br></br>
        Hero power: {hero.power}
        <br></br>
        Hero combat: {hero.combat}
        <br></br>
        Hero speed: {hero.speed}
        <br></br>
        <img
          style={{ width: "100%", height: "100px" }}
          src={hero.imgurl}
        ></img>
      </a.div>

    

    );
  }
};

export default HeroCard;

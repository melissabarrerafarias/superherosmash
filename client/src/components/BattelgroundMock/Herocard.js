
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HEROS } from "../../utils/queries";

const HeroCard = ({ hero }) => {
  const { loading, data } = useQuery(QUERY_HEROS);
  if (loading) {
    return <p>Still loading</p>;
  } else {
    console.log("This heros name is ");
    console.log(hero);
    return (
      <div className="HeroCard">
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
          style={{ width: "100px", height: "100px" }}
          src={hero.imgurl}
        ></img>
      </div>

    
//     const propss = useSpring({width: '300px', from: {width: '10px'}})
    
//     return(
//         <a.div className="HeroCard" style={propss}> 
//         <div >Hero Name: {hero.name} Hero Id: {hero.id}</div>
//         </a.div>
// >>>>>>> develop-kj
    );
  }
};

export default HeroCard;

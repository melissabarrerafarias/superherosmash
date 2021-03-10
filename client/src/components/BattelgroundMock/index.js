import React from "react";
import { useSpring, animated as a } from "react-spring";
import Arena from "./Arena";
// Hero stuff
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HEROS, QUERY_HERO_BY_ID } from "../../utils/queries";

const HEROS = [


//const MOCK_HEROS = [
  
  {
    id: "",
    name: "",
    strength: "",
    speed: "",
    power: "",
    combat: "",
    durability: "",
    imgurl: "",
  },
  {
    id: "",
    name: "",
    strength: "",
    speed: "",
    power: "",
    combat: "",
    durability: "",
    imgurl: "",
  },
  {
    id: 3,
    name: "Hero3",
  },
  {
    id: 4,
    name: "Hero4",
  },
  {
    id: 5,
    name: "Hero5",
  },
];

const BattleGround = () => {

//   //let heroNumOne = Math.floor(Math.random() * (730 - 1) + 1);
//   // let heroNumTwo = Math.floor(Math.random() * (730 - 1) + 1);
//   let num1 = 10; // id of the first hero to display
//   let num2 = 20; // id of the second hero to display
//   const props = useSpring({ opacity: 1, from: { opacity: 0 } });
//   const { loading, data } = useQuery(QUERY_HERO_BY_ID, {
//     variables: { id: num1 },
//   });
//   const heroTwo = useQuery(QUERY_HERO_BY_ID, {
//     variables: { id: num2 },
//   });
//   let loadTwo = heroTwo.loading;
//   let dataTwo = heroTwo.data;
//   if (loading || loadTwo) {
//     return <p>Loading...</p>;
//   } else {
//     populateHeroObject(1, data);
//     console.log(dataTwo);
//     console.log("This is data two");
//     populateHeroObject(2, dataTwo);
//     return (
//       <div>
//         <p> Got the data! </p>
//         <a.div class="battleGround" style={props}>
//           <Arena heros={HEROS} />
//         </a.div>
//         ;
//       </div>
//     );
//     //}
//   }

  
//   const props = useSpring({opacity: 1, from:  {opacity : 0}})

//   return (
//     <a.div className="battleGround" style={props}>
      
      
//        <Arena heros={MOCK_HEROS} />
      
//     </a.div>
//   );

};

function populateHeroObject(heroNum, heroData) {
  let currentHero = HEROS[heroNum - 1];
  currentHero.id = heroData.getHeroById.id;
  currentHero.name = heroData.getHeroById.name;
  currentHero.speed = heroData.getHeroById.speed;
  currentHero.power = heroData.getHeroById.power;
  currentHero.combat = heroData.getHeroById.combat;
  currentHero.durability = heroData.getHeroById.durability;
  currentHero.strength = heroData.getHeroById.strength;
  currentHero.imgurl = heroData.getHeroById.imgurl;
}
export default BattleGround;

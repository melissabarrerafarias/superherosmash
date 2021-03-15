import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import Arena from "./Arena";

// Hero stuff
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HERO_BY_ID } from "../../utils/queries";
import backgroundImage from "../../../src/img/2.jpg";

const HEROS = [
  {
    id: "",
    name: "",
    strength: "",
    speed: "",
    power: "",
    combat: "",
    durability: "",
    biography: "",
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
    biography: "",
    imgurl: "",
  },
];

const randomHero = () => {
  return Math.floor(Math.random() * (730 - 1) + 1);
};

const BattleGround = () => {
  // Hooks for hero id generation defaulting to random
  const [heroId1, setHeroId1] = useState(randomHero);
  const [heroId2, setHeroId2] = useState(randomHero);

  // keeping the randomness to index js by wrapping the set state functions
  const setHero1 = () => {
    return setHeroId1(randomHero);
  };

  const setHero2 = () => {
    return setHeroId2(randomHero);
  };

  // original name convention
  let num1 = heroId1;
  let num2 = heroId2;

  console.log(num1, num2);
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { loading, data } = useQuery(QUERY_HERO_BY_ID, {
    variables: { id: num1 },
  });
  const heroTwo = useQuery(QUERY_HERO_BY_ID, {
    variables: { id: num2 },
  });
  let loadTwo = heroTwo.loading;
  let dataTwo = heroTwo.data;
  if (loading || loadTwo) {
    return <p>Loading...</p>;
  } else {
    //console.log(data);
    populateHeroObject(1, data);
    //console.log(dataTwo);
    console.log("This is data two");
    populateHeroObject(2, dataTwo);
    return (
      <body
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div>
          <p> Got the data! </p>
          <a.div class="battleGround" style={props}>
            <Arena
              heros={HEROS}
              setters={{ setHeroId1: setHero1, setHeroId2: setHero2 }}
            />
          </a.div>
          ;
        </div>
      </body>
    );
    //}
  }
};

function populateHeroObject(heroNum, heroData) {
  let currentHero = HEROS[heroNum - 1];
  const nullReplace = "Unknown";
  currentHero.id = heroData.getHeroById.id;
  currentHero.name = trimWhiteSpace(heroData.getHeroById.name);
  if (heroData.getHeroById.speed === "null") {
    currentHero.speed = nullReplace;
  } else {
    currentHero.speed = heroData.getHeroById.speed;
  }

  if (heroData.getHeroById.power === "null") {
    currentHero.power = nullReplace;
  } else {
    currentHero.power = heroData.getHeroById.power;
    currentHero.durability = "∞";
  }
  if (heroData.getHeroById.combat === "null") {
    currentHero.combat = nullReplace;
  } else {
    currentHero.combat = heroData.getHeroById.combat;
  }
  if (heroData.getHeroById.durability === "null") {
    currentHero.durability = nullReplace;
  } else {
    currentHero.durability = heroData.getHeroById.durability;
  }
  if (heroData.getHeroById.strength === "null") {
    currentHero.strength = nullReplace;
  } else {
    currentHero.strength = heroData.getHeroById.strength;
  }
  currentHero.imgurl = heroData.getHeroById.imgurl;
  currentHero.biography = heroData.getHeroById.biography;
  console.log(heroData.getHeroById.biography); //TODO Data is here on back end but not front for some reason
}
function trimWhiteSpace(stringToTrim) {
  return stringToTrim.trim();
}

export default BattleGround;

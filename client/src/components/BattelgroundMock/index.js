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

const loadingMsgs = [
  "...and enjoy the elevator music...",
  "Please wait while the little elves draw your map",
  "Don't worry - a few bits tried to escape, but we caught them",
  "Would you like fries with that?",
  "Checking the gravitational constant in your locale...",
  "Go ahead -- hold your breath!",
  "...at least you're not on hold...",
  "Hum something loud while others stare",
  "You're not in Kansas any more",
  "The server is powered by a lemon and two electrodes.",
  "Please wait while a larger software vendor in Seattle takes over the world",
  "We're testing your patience",
  "As if you had any other choice",
  "Follow the white rabbit",
  "Why don't you order a sandwich?",
  "While the satellite moves into position",
  "keep calm and npm install",
  "The bits are flowing slowly today",
  "Dig on the 'X' for buried treasure... ARRR!",
  "It's still faster than you could draw it",
  "The last time I tried this the monkey didn't survive. Let's hope it works better this time.",
  "I should have had a V8 this morning.",
  "My other loading screen is much faster.",
  "Testing on Timmy... We're going to need another Timmy.",
  "Reconfoobling energymotron...",
  "(Insert quarter)",
  "Are we there yet?",
  "Have you lost weight?",
  "Just count to 10",
  "Why so serious?",
  "It's not you. It's me.",
  "Counting backwards from Infinity",
  "Don't panic...",
  "Embiggening Prototypes",
  "Do not run! We are your friends!",
  "Do you come here often?",
  "Warning: Don't set yourself on fire.",
  "We're making you a cookie.",
  "Creating time-loop inversion field",
  "Spinning the wheel of fortune...",
  "Loading the enchanted bunny...",
  "Computing chance of success",
  "I'm sorry Dave, I can't do that.",
  "Looking for exact change",
  "All your web browser are belong to us",
  "All I really need is a kilobit.",
  "I feel like im supposed to be loading something. . .",
  "What do you call 8 Hobbits? A Hobbyte.",
  "Should have used a compiled language...",
  "Is this Windows?",
  "Adjusting flux capacitor...",
  "Please wait until the sloth starts moving.",
  "Don't break your screen yet!",
  "I swear it's almost done.",
  "Let's take a mindfulness minute...",
  "Unicorns are at the end of this road, I promise.",
  "Listening for the sound of one hand clapping...",
  "Keeping all the 1's and removing all the 0's...",
  "Putting the icing on the cake. The cake is not a lie...",
  "Cleaning off the cobwebs...",
  "Making sure all the i's have dots...",
  "We need more dilithium crystals",
  "Where did all the internets go",
  "Connecting Neurotoxin Storage Tank...",
  "Granting wishes...",
  "Time flies when you’re having fun.",
  "Get some coffee and come back in ten minutes..",
];

const randomHero = () => {
  return (Math.floor(Math.random() * (730 - 1) + 1))
}

const BattleGround = () => {

  // Hooks for hero id generation defaulting to random
  const [heroId1, setHeroId1] = useState(randomHero);
  const [heroId2, setHeroId2] = useState(randomHero);


  // keeping the randomness to index js by wrapping the set state functions
  const setHero1 = () => {
    return (setHeroId1(randomHero))
  }

  const setHero2 = () => {
    return (setHeroId2(randomHero))
  }


  // original name convention
  let num1 = heroId1
  let num2 = heroId2





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
    let funnyLoading = loadingMsgs[Math.floor(Math.random()*loadingMsgs.length)];
    return funnyLoading; 
  } else {
    populateHeroObject(1, data);
    console.log(dataTwo);
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
            <Arena heros={HEROS} setters={{ "setHeroId1": setHero1, "setHeroId2": setHero2 }} />
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
  console.log(heroData);
  currentHero.id = heroData.getHeroById.id;
  currentHero.name = trimWhiteSpace(heroData.getHeroById.name);
  currentHero.speed = heroData.getHeroById.speed;
  currentHero.power = heroData.getHeroById.power;
  currentHero.combat = heroData.getHeroById.combat;
  currentHero.durability = heroData.getHeroById.durability;
  currentHero.strength = heroData.getHeroById.strength;
  currentHero.imgurl = heroData.getHeroById.imgurl;
  currentHero.biography = heroData.getHeroById.biography;
  console.log(heroData.getHeroById.biography); //TODO Data is here on back end but not front for some reason
}
function trimWhiteSpace(stringToTrim) {
  return stringToTrim.trim();
}

export default BattleGround;

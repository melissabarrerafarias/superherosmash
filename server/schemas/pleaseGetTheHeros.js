require("dotenv").config(); // environmental variable
const fetch = require("node-fetch");

async function getHerosPlease(heroId) {
  let accesstoken = process.env.HERO_API_KEY;
  //console.log(accesstoken);
  console.log(`THe hero id is ${heroId}`);
  let heroData = await fetch(
    `https://superheroapi.com/api/${accesstoken}/${heroId}`
  );
  if (heroData.ok) {
    let parsedHeroData = await heroData.json();
    //console.log("first", parsedHeroData);
    return parsedHeroData;
  } else {
    console.log("You messed up");
    return null;
  }
}

module.exports = getHerosPlease;

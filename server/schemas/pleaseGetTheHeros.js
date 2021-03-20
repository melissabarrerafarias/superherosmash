require("dotenv").config(); // environmental variable
const fetch = require("node-fetch");

async function getHerosPlease(heroId) {
  let accesstoken = process.env.HERO_API_KEY;
  let heroData = await fetch(
    `https://superheroapi.com/api/${accesstoken}/${heroId}`
  );
  if (heroData.ok) {
    let parsedHeroData = await heroData.json();
    return parsedHeroData;
  } else {
    return null;
  }
}

module.exports = getHerosPlease;

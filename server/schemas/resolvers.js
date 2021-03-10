const User = require("../models/User");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const getHerosPlease = require("./pleaseGetTheHeros");
require("dotenv").config(); // environmental variable

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    // get all users
    users: async () => {
      return User.find().select("-__v -password");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
    getAllHeros: async () => {
      let heroData = await getHerosPlease(1);
      console.log(heroData);

      console.log(heroData.powerstats.strength + " IS MY NAME");
      return {
        name: heroData.name,
        strength: heroData.powerstats.strength,
        speed: heroData.powerstats.speed,
        durability: heroData.powerstats.durability,
        power: heroData.powerstats.power,
        combat: heroData.powerstats.combat,
        imgurl: heroData.image.url,
      };
      /* 
     name: String
    strength: String
    speed: String
    durability: String
    power: String
    combat: String
    */
    },
    getHeroById: async (parent, { id }) => {
      console.log("ENTERED RESOLVER");
      let heroData = await getHerosPlease(id);
      //console.log(heroData);

      //console.log(heroData.powerstats.strength + " IS MY NAME");
      return {
        name: heroData.name,
        strength: heroData.powerstats.strength,
        speed: heroData.powerstats.speed,
        durability: heroData.powerstats.durability,
        power: heroData.powerstats.power,
        combat: heroData.powerstats.combat,
        imgurl: heroData.image.url,
      };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;

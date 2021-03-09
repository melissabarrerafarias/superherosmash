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
      console.log(heroData.name + " IS MY NAME");
      return {
        name: heroData.name,
        strength: heroData.strength,
        speed: heroData.speed,
        durability: heroData.durability,
        power: heroData.power,
        combat: heroData.combat,
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

const { User, Comment, Hero } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const getHerosPlease = require("./pleaseGetTheHeros");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
require("dotenv").config(); // environmental variable

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
          .select("-__v -password") //hide password
          .populate("comments");
        return user;
      }
      throw new AuthenticationError("Oops! Not logged in!");
    },
    // get all users
    users: async () => {
      return User.find().select("-__v -password").populate("comments");
    },
    // get single user
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("comments");
    },
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    comment: async (parent, { _id }) => {
      return Comment.findOne({ _id });
    },


    getAllHeros: async () => {
      console.log("Getting Heros From Db");
      const data = await Hero.find()       
      .populate("voteObjs");
      
      //console.log(data);
      return(data)
    },

    getHeroById: async (parent, { id }) => {
      console.log("ENTERED RESOLVER");
      let heroData = await getHerosPlease(id);
      //console.log(heroData);

      //console.log(heroData.powerstats.strength + " IS MY NAME");
      return {
        id: heroData.id,
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
    login: async (parent, { email, password }, context) => {
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
    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: comment._id } },
          { new: true }
        );

        return comment;
      }
      throw new AuthenticationError(
        "You must be logged in to participate in the discussion!"
      );
    },
    addReply: async (parent, { commentId, replyBody }, context) => {
      if (context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          {
            $push: {
              replies: {
                $each: [{ replyBody, username: context.user.username }],
                $sort: { createdAt: -1 },
              },
            },
          },
          { new: true }
        );
        return updatedComment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    deleteComment: async (parent, { commentId }, context) => {
      if (context.user) {
        const deletedComment = await Comment.findOneAndRemove(
          { _id: commentId },
          { new: true }
        );
        return deletedComment;
      }
      throw new AuthenticationError("You need to be logged in to delete!");
    },


    addVote: async (parent, { id, name }, context) => {
      console.log("In add vote mutation");
      console.log(id);
      let newHeroId = id;
      let newHeroName = name;
      console.log(name);
      // https://docs.mongodb.com/manual/reference/operator/update/inc/
      //add a check to see if the hero exists in the local db
      const heroExists = await Hero.exists({ name: newHeroName });
      console.log("Hero exists?", heroExists);
      //if hero does not exist, create
      if (!heroExists) {
 
        //need to create the hero, and then run the update
        console.log("creating new hero "+ newHeroName);
        const create = await Hero.create({
          name: newHeroName,
          id: newHeroId, //<-- THis might need to be added in later TODO
          votes: 0,
          wins: 0,
          losses: 0,
        });
      } 
      
      // Update the hero with vote

      //we need to find the hero who has the matching id in the
      console.log("Updating New Hero " + newHeroName)
      let update = await Hero.findOneAndUpdate(
        { name: newHeroName },
        { 
          $inc: { votes: "1" }, 
          $push:{ voteObjs:  {username: context.user.username} } 
        },
        { new: true }
      );

      console.log(update)

      console.log(`Hero has this ${update.votes} votes`);

      return update;
    },

    
  },
};

module.exports = resolvers;

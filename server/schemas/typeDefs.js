const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
    replyCount: Int
    replies: [Reply]
  }

  type Reply {
    _id: ID
    replyBody: String
    createdAt: String
    username: String
  }

  type Hero {
    id: Int
    name: String
    strength: String
    speed: String
    durability: String
    power: String
    combat: String
    biography: String
    imgurl: String
  }

  type HeroStats {
    name: String
    id: ID
    votes: Int
    wins: Int
    losses: Int
    voteObjs:[Vote]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Vote {
    _id: ID
    createdAt:String
    username:String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
    getAllHeros: [HeroStats]
    getHeroById(id: Int): Hero
  }

  type Mutation {
   
    addVote(id: Int!, name: String! heroId:ID): HeroStats
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentBody: String!): Comment
    addReply(commentId: ID!, replyBody: String!): Comment
    deleteComment(commentId: ID!): Comment
  }
`;

module.exports = typeDefs;

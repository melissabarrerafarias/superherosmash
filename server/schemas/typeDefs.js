const { gql } = require("apollo-server-express");

const typeDefs = gql`
<<<<<<< HEAD
  type User {
    _id: ID
    username: String
    email: String
  }
=======
>>>>>>> fd4bf4971f80df6c5a28e2825fdd41cc4beeaf75
  type Hero {
    name: String
    strength: String
    speed: String
    durability: String
    power: String
    combat: String
    imgurl: String
  }
<<<<<<< HEAD
=======
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
>>>>>>> fd4bf4971f80df6c5a28e2825fdd41cc4beeaf75

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    getAllHeros: Hero
    getHeroById(id: Int): Hero
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentBody: String!): Comment
    addReply(commentId: ID!, replyBody: String!): Comment
  }
`;

module.exports = typeDefs;

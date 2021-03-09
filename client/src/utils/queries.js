import gql from "graphql-tag";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_HEROS = gql`
  {
    getAllHeros {
      name
      strength
      speed
      durability
      power
      combat
    }
  }
`;

import gql from 'graphql-tag'; 

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

export const QUERY_COMMENTS = gql`
  query comments($username: String) {
    comments(username: $username) {
      _id
      commentBody
      createdAt
      username
      replyCount
      replies {
        _id
        createdAt
        username
        replyBody
      }
    }
  }
`;

export const QUERY_SINGLE_COMMENT = gql`
  query comment($id: ID!) {
    comment(_id: $id) {
      _id
      commentBody
      createdAt
      username
      replyCount
      replies {
        _id
        createdAt
        username
        replyBody
      }
    }
  }
`;
import {gql} from 'apollo-server';

const postTypeDefs = gql`
  type Post {
    _id: String!
    title: String!
    author: String!
    content: String!
    createdAt: String!
  }

  extend type Query {
    post(_id: ID!): Post
    posts: [Post]
  }

  extend type Mutation {
    addPosts(
      title: String!
      author: String!
      content: String!
    ): Post

    removePost(
      _id: ID!
    ): Post

    editPost(
      _id: ID!
      title: String!
      author: String!
      content: String!
    ): Post
    
  }
`;

export {
  postTypeDefs,
};

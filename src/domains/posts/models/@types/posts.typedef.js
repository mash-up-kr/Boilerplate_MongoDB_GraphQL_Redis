import {gql} from 'apollo-server';

const postTypeDefs = gql`
  type Post {
    id: ID!
    title: String!
    author: String!
    content: String!
    createdAt: DateTime!
  }

  extend type Query {
    post(id: ID!): Post
    posts: [Post]
  }

  extend type Mutation {
    addPosts(
      title: String!
      author: String!
      content: String!
    ): Post

    removePost(
      id: ID!
    ): Boolean

    editPost(
      id: ID!
      title: String!
      author: String!
      content: String!
    ): Post
    
  }
`;

export {
  postTypeDefs,
};

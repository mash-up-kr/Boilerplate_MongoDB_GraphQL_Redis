import {gql} from 'apollo-server';

const postTypeDefs = gql`
  type Post {
    _id: ID!
    title: String!
    author: String!
    content: String!
    ipv4: String!
    isDeleted: Boolean
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
    comments: [Comment]
    hashtags: [Hashtag]
  }

  extend type Query {
    post(_id: ID!): Post
    posts: [Post]
  }

  input PostInput {
    title: String!
    author: String!
    content: String!
  }

  input EditPostInput {
    _id: ID!
    title: String!
    author: String!
    content: String!
  }

  extend type Mutation {
    addPost(input: PostInput!): Post

    removePost(_id: ID!): Post

    editPost(input: EditPostInput!): Post
  }
`;

export {
  postTypeDefs,
};

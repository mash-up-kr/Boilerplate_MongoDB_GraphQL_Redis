import {gql} from 'apollo-server';

const commentTypeDefs = gql`
  type Comment {
    _id: ID!
    comment: String!
    author: String!
    ipv4: String!
    isDeleted: Boolean
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
    isChild: Boolean!
    postId: Post!
    replies: [Comment]
  }

  extend type Query {
    comment(_id: ID!): Comment
    comments(postId: ID!): [Comment]
    replies(_id: ID!): Comment
  }

  extend type Mutation {
    addComments(
      comment: String!
      author: String!
      postId: ID!
    ): Comment

    removeComment(
      _id: ID!
    ): Comment

    editComment(
      _id: ID!
      comment: String!
      author: String!
    ): Comment

    addReplies(
      _id: ID!
      comment: String!
      author: String!
    ): Comment
  }
`;

export {
  commentTypeDefs,
};

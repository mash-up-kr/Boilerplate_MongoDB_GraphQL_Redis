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
    parent: Comment
    post: Post!
    replies: [Comment]
  }

  extend type Query {
    comment(_id: ID!): Comment
    comments(postId: ID!): [Comment]
    replies(_id: ID!): Comment
  }

  input CommentInput {
    comment: String!
    author: String!
    postId: ID!
  }

  input EditCommentInput {
    _id: ID!
    comment: String!
    author: String!
  }

  input ReplyInput {
    _id: ID!
    comment: String!
    author: String!
  }

  extend type Mutation {
    addComment(input: CommentInput!): Comment

    removeComment(_id: ID!): Comment

    editComment(input: EditCommentInput): Comment

    addReply(input: ReplyInput): Comment
  }
`;

export {
  commentTypeDefs,
};

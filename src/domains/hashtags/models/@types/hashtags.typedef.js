import {gql} from 'apollo-server';

const hashtagTypeDefs = gql`
  type Hashtag {
    _id: ID!
    title: String!
    posts: [Post]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  extend type Query {
    hashtag(id: ID!): Hashtag
    hashtags: [Hashtag]
  }

  input HashtagInput {
    title: String!
    postId: ID
  }

  extend type Mutation {
    addHashtag(input: HashtagInput!): Hashtag
  }
`;

export {
  hashtagTypeDefs,
};

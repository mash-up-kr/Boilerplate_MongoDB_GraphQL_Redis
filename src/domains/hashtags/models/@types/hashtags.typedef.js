import {gql} from 'apollo-server';

const hashtagTypeDefs = gql`
  type Hashtag {
    id: ID!
    tag: String!
    posts: [ID]
    createdAt: DateTime!
  }

  extend type Query {
    hashtag(id: ID!): Hashtag
    hashtags: [Hashtag]
  }

  extend type Mutation {
    createHashtag(
      tag: String!
      posts: [ID]
    ): Hashtag!
    addHashtag(
      tag: ID!
      post: ID!
    ) : Hashtag!
  }
`;

export {
  hashtagTypeDefs,
};

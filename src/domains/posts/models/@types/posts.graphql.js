import {gql} from 'apollo-server';

const postDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

export default postDefs;

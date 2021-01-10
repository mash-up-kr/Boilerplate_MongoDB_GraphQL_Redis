import express from 'express';
import router from './routes/index.js';
import morgan from './middlewares/morgan.js';
import cors from 'cors';
import {ApolloServer, gql} from 'apollo-server';
import path from 'path';
const __dirname = path.resolve();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan);
app.use(cors());
app.use(express.json());
app.use(router);
app.use((req, res, next) => {
  res.status(404).send('Not found');
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

const server = app.listen(port, () => {
  console.log(`🚀 Express Server ready at ${port}`);
});

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const apolloServer = new ApolloServer({typeDefs, resolvers});

// The `listen` method launches a web server.
apolloServer.listen().then(({url}) => {
  console.log(`🚀 Apollo Server ready at ${url}`);
});

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

app.listen(port, () => {
  console.log(`🚀 Express Server ready at ${port}`);
});

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

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

const resolvers = {
  Query: {
    books: () => books,
  },
};

const apolloServer = new ApolloServer({typeDefs, resolvers});

apolloServer.listen().then(({url}) => {
  console.log(`🚀 Apollo Server ready at ${url}`);
});

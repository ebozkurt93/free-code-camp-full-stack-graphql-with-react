const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to the mlab database
mongoose.connect(
  'mongodb://erdem:1133225544a@ds161102.mlab.com:61102/graphql-course'
);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`now listening for requests on port ${PORT}`);
});

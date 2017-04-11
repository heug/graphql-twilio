const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

var schema = buildSchema(`
	type Query {
		hello: String
	}
`);

var root = { hello: () => 'Hello World!' };

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

app.listen(1337, () => console.log('listening on port 1337'));

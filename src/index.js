// imports
const { ApolloServer } = require('apollo-server');

// 1 - the type definition which defines a schema with one field
const typeDefs = `
  type Query {
    info: String!
  }
`

// 2 - implementation of the schema
// structure is the same as the structure of the type definition
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
}

// 3 - schema and resolvers are bundles and passed to ApolloServer
// ApolloServer is imported from apollo-server
// this tells the server what operations are accepted
// and how they should be resolved
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );

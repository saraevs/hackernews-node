// imports
const { ApolloServer } = require('apollo-server');

// 1 - the type definition which defines the schema
const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`

// 2 - implementation of the schema
// structure is the same as the structure of the type definition
// Every schema has 3 different root types that corrspond to operation types (Query, Mutation and Subscription)
// The fields on these root types are called root fields and define the available API operations

// this schema only has a single root field called info (type = query)
// when sending a query, mutation or subscription to a graphQL API - they always need to start with a root field
const resolvers = {
  Query: {
    info: () => null
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

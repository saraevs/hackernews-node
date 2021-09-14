// imports
const { ApolloServer } = require('apollo-server');

// 1 - the type definition which defines the schema
// No longer needed because separated out into own file
// const typeDefs = `
//   type Query {
//     info: String!
//     feed: [Link!]!
//   }

//   type Mutation {
//     post(url: String!, description: String!): Link!
//   }

//   type Link {
//     id: ID!
//     description: String!
//     url: String!
//   }
// `

// dummy data
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

// 2 - implementation of the schema
// structure is the same as the structure of the type definition
// Every schema has 3 different root types that corrspond to operation types (Query, Mutation and Subscription)
// The fields on these root types are called root fields and define the available API operations

// this schema only has a single root field called info (type = query)
// when sending a query, mutation or subscription to a graphQL API - they always need to start with a root field
// const resolvers = {
//   Query: {
//     info: () => `This is the API of a Hackernews Clone`
//   }
// }

// all fields not just root fields have resolver functions
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },

  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
}

// 3 - schema and resolvers are bundles and passed to ApolloServer
// ApolloServer is imported from apollo-server
// this tells the server what operations are accepted
// and how they should be resolved
const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );

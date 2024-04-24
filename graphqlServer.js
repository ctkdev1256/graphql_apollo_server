import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

const typeDefs = `#graphql
    type Query {
        thank_you: String
    }
`;

const resolve = {
    Query: {
        thank_you: () => 'Thank you for today interview, Arivu and Justin.  Have a wonderful day.',
    },
};

const graphqlServer = new ApolloServer({typeDefs, resolve});

// Object destructuring
const {url} = await startStandaloneServer(graphqlServer, {listen: {port: 9002} });

console.log(`Apollo server is running on ${url}`)

// Type node graphqlServer.js to bring up stand alone server
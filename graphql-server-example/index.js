import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

// db
import { db } from "./db";

// types
import { typeDefs } from "./schema";

const resolvers = {
    Query: {
        games() {
            return db.games;
        }
    }
}

// server setup
const server = new ApolloServer({
    //typeDefs (schemas) -- definitions of types of data available in the graph that gonna be queried
    typeDefs,
    // resolvers: require('./resolvers'),
})

const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
});

console.log('Server ready at port', 4000);  
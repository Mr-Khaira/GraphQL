import { ApolloServer } from "@apollo/server";
import { graphQLSchema } from "./schema/schema.js";
import { graphQLResolvers } from "./resolvers/resolvers.js";
import { startStandaloneServer } from "@apollo/server/standalone";

export const graphQL = (port: number) => {
  // 'ApolloServer' a class, the below is an instance of it.

  const server = new ApolloServer({
    typeDefs: graphQLSchema,
    resolvers: graphQLResolvers,
  }); // passed typeDefs and Resolvers these are both objects.

  /* typedef is basically like a calss(c++) that defines the "shape" 
  of queries that are executed against our data. */

  startStandaloneServer(server, {
    listen: { port },
  })
    .then(() => {
      console.log("server started at ", port);
    })
    .catch((error) => {
      console.log("Error at standALoneServer ", error);
    });
};

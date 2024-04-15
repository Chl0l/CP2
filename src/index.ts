import { DataSource } from "typeorm";

import Country from "./entities/Country/country";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { CountryResolver } from "./resolvers/CountryResolver";

const dataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    entities: [Country],
    synchronize: true,
  });

const PORT = 4000;
const startApolloServer = async () => {
    const schema = await buildSchema({
        resolvers: [CountryResolver],
        validate: true
    });
    
    const server = new ApolloServer({schema});

  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });

  await dataSource.initialize();
  console.log(`🚀  Server ready at: ${url}`);
};

startApolloServer();

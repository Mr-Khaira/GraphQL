import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

const appoloClient = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={appoloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>
);

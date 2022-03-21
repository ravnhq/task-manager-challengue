import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://syn-api-prod.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoibmVyZGVyeSIsInByb2plY3RJZCI6IjA3YzRjNzdhLTRlODUtNDJmYi1iMGExLTI3ODU0NDg4MGZiYiIsImZ1bGxOYW1lIjoiSmFja2VsaW5lIFF1aXNwZSIsImVtYWlsIjoiamFja2VsaW5lcXVpc3BlQHJhdm4uY28iLCJpYXQiOjE2NDc1MjcxNDd9.UFsHml9PqF0dLImRKQ2bPC9BXEsSoaMVdhsMrWQLe3Y",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

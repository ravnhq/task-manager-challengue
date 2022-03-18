module.exports = {
  schema: "https://syn-api-prod.herokuapp.com/graphql",
  documents: "src/**/!(*.d).{ts,tsx}",
  generates: {
    "./src/__generated__/graphql-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "./src/__generated__/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

// app/ApolloProvider.js
"use client"; // Mark this component as a client component

import { ApolloProvider } from '@apollo/client';
import createApolloClient from './../utils/apolloClient';
const client = createApolloClient();

const ApolloClientProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;

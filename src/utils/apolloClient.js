// lib/apolloClient.js
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';


const createApolloClient = () => {
  const httpLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_NODE_BACKEND,
  });

  return new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;

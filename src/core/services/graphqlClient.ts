import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(import.meta.env.VITE_APP_HYGRAPH_URL, {})
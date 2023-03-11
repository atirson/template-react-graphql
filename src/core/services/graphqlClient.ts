import { GraphQLClient } from 'graphql-request'

const test = import.meta.env.VITE_APP_HYGRAPH_URL
const test1 = 'https://countries.trevorblades.com/'

export const graphqlClient = new GraphQLClient(test, {})
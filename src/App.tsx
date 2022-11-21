import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Routes from '@app/core/config/routes';

import '@app/styles/index.css';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cla1od2o0159701uk3tyf24lt/master',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

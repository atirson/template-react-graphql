import { QueryClientProvider } from 'react-query';
import { queryClient } from '@core/services/queryClient'
import { ReactQueryDevtools } from 'react-query/devtools';
import Routes from '@app/core/config/routes';

import 'react-loading-skeleton/dist/skeleton.css'
import '@app/styles/index.css';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Routes />
        {import.meta.env.VITE_APP_ENVIRONMENT === 'dev' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

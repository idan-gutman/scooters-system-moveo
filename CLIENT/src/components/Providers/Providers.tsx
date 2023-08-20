import { AuthProvider } from 'context/AuthProvider';
import { SessionProvider } from 'context/SessionProvider';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import StylesProvider from './StylesProvider';

const queryClient = new QueryClient();

const Providers: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SessionProvider>
        <StylesProvider>
          <AuthProvider>{children}</AuthProvider>
        </StylesProvider>
      </SessionProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
  </QueryClientProvider>
);
export default Providers;

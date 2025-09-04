'use client';
import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@/lib/apollo';

export default function Providers({ children }: { children: ReactNode }) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}

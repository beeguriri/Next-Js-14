"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from 'react';

type Props = {
  children: React.ReactNode
}

function RQProvider({ children }: Props) {

  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
          // staleTime: Infinity,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}></ReactQueryDevtools>
    </QueryClientProvider>)
}

export default RQProvider;
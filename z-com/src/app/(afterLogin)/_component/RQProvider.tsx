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
          refetchOnWindowFocus: false, //탭 전환 등
          refetchOnMount: true, //페이지 이동 또는 component 마운트/언마운트
          refetchOnReconnect: false, //인터넷 연결 끊겼다가 다시 접속 됐을 때
          retry: false, //데이터 가져올때 실패하면 재시도 옵션
          // staleTime: Infinity, //한번 데이터 가져오면 새로고침 안함
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
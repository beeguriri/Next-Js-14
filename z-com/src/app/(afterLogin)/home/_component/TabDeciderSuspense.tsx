import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import TabDecider from "./TabDecider";
import getPostRecommaends from "../_lib/getPostRecommaends";

export default async function TabDeciderSuspense() {

  //데이터 불러오기
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'recommends'], //key를 가지고 있는 애면
    queryFn: getPostRecommaends, //이 메서드 실행
    initialPageParam: 0, //필수값
  });

  //서버에서 온 데이터를 클라이언트에서 물려받음
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <TabDecider />
    </HydrationBoundary>
  )
}
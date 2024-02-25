import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import PostForm from './_component/PostForm';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import style from './home.module.css';
import PostRecommends from './_component/PostRecommends';
import getPostRecommaends from './_lib/getPostRecommaends';

export default async function Home() {

  //데이터 불러오기
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommends'], //key를 가지고 있는 애면
    queryFn: getPostRecommaends //이 메서드 실행
  });
  
  //서버에서 온 데이터를 클라이언트에서 물려받음
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider> {/* 선택하는 탭에 따라 내용이 바뀜 => tap과 post의 공통부모*/}
          <Tab />
          <PostForm />
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  )
}

//https://twitter.com/home
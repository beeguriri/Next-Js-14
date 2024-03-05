import PostForm from './_component/PostForm';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import style from './home.module.css';
import { Suspense } from 'react';
import Loading from './loading';
import TabDeciderSuspense from './_component/TabDeciderSuspense';

export default async function Home() {

  return (
    <main className={style.main}>
      <TabProvider> {/* 선택하는 탭에 따라 내용이 바뀜 => tap과 post의 공통부모*/}
        <Tab />
        <PostForm />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  )
}

//https://twitter.com/home
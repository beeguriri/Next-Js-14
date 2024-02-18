import Post from '../_component/Post';
import PostForm from './_component/PostForm';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import style from './home.module.css';

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider> {/* 선택하는 탭에 따라 내용이 바뀜 => tap과 post의 공통부모*/}
        <Tab />
        <PostForm />
        {/* 무한스크롤 */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  )
}

//https://twitter.com/home
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from "./singlePost.module.css";
import CommentForm from "./_component/CommentForm";
import SinglePost from "./_component/SinglePost";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import getSinglePost from "./_lib/getSinglePost";
import getComments from "./_lib/getComments";
import Comments from "./_component/Comments";

type Props = {
  params: { id: string }
}

export default async function Page({ params }: Props) {

  const { id } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    {
      queryKey: ['posts', id],
      queryFn: getSinglePost,
    }
  );

  await queryClient.prefetchQuery(
    {
      queryKey: ['posts', id, 'comments'],
      queryFn: getComments,
    }
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        {/* 헤더 영역 */}
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>게시하기</h3>
        </div>
        {/* 원본게시글 */}
        <div style={{ marginTop: 60 }}>
          <SinglePost id={id} />
        </div>
        {/* comment 폼 */}
        <CommentForm />
        {/* comment list => 얘도 post임 */}
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  )
}

//https://twitter.com/[userName]/status/[postID]
import PhotoModalCloseButton from './_component/PhotoModalCloseButton';
import style from './photoModal.module.css';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import SinglePost from '@/app/(afterLogin)/[username]/status/[id]/_component/SinglePost';
import getSinglePost from '@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost';
import getComments from '@/app/(afterLogin)/[username]/status/[id]/_lib/getComments';
import Comments from '@/app/(afterLogin)/[username]/status/[id]/_component/Comments';
import ImageZone from './_component/ImageZone';

//화면 삼분할
//첫번째 분할에 버튼
//두번째 분할에 사진 및 action buttons
//세번쨰 분할에 사진 없는 포스트, action buttons, comment form, 답글 목록들

type Props = {
  params: { id: string }
}


export default async function PhotoModal({ params }: Props) {

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
    <div className={style.container}>
      <HydrationBoundary state={dehydratedState}>

        {/* 닫기 버튼 */}
        <PhotoModalCloseButton />
        {/* 이미지 영역 */}
        <ImageZone id={id} />

        {/* ⬇️ TODO: 오른쪽 모달 닫는 용도의 버튼 */}
        {/* 오른쪽 영역 */}
        <div className={style.commentZone}>
          <SinglePost id={id} noImage />
          <CommentForm id={id} />
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
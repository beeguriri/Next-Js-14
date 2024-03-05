"use client";

import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
import style from '../photoModal.module.css';
import { useQuery } from '@tanstack/react-query';
import { Post as IPost } from '@/model/Post';
import getSinglePost from '@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost';

type Props = {
  id: string,
}

export default function ImageZone({ id }: Props) {

  const { data: post, error } = useQuery<IPost, Object, IPost, [_1: string, _2: string]>({
    queryKey: ['posts', id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000, //default 0ms (fresh => stale time)
    gcTime: 5 * 60 * 1000, //default 5*60*1000 ms (5분)
  });

  if (!post?.Images[0])
    return null;

  return (
    <div className={style.imageZone}>
      <img src={post?.Images[0].link} />
      <div className={style.image} style={{ backgroundImage: `url(${post?.Images[0].link})` }} />
      <div className={style.buttonZone}>
        <div className={style.buttonInner}>
          <ActionButtons photoModal />
        </div>
      </div>
    </div>
  )
}
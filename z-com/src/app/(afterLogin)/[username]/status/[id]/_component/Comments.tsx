"use client";

import { Post as IPost} from '@/model/Post';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Post from '@/app/(afterLogin)/_component/Post';
import { error } from 'console';
import getComments from '../_lib/getComments';

type Props = {
  id: string,
}

export default function Comments({id}: Props) {
  
  //게시글이 없으면 답글도 없음!
  const queryCLient = useQueryClient();
  const post = queryCLient.getQueryData(['posts', id]);

  const { data, error } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, _3: string]>({
    queryKey: ['posts', id, 'comments'],
    queryFn: getComments,
    staleTime: 60*1000, //default 0ms (fresh => stale time)
    gcTime: 5*60*1000, //default 5*60*1000 ms (5분)
    enabled: !!post, //포스트가 없으면 댓글을 안가져 옴!!
  });

  if (post)
    return data?.map((post: IPost) => <Post post={post} key={post.postId} />)

  return null;
}
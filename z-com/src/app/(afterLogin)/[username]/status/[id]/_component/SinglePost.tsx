"use client";

import { Post as IPost} from '@/model/Post';
import { notifyManager, useQuery, useQueryClient } from '@tanstack/react-query';
import getSinglePost from '../_lib/getSinglePost';
import Post from '@/app/(afterLogin)/_component/Post';
import { error } from 'console';

type Props = {
  id: string,
  noImage?: boolean,
}

export default function SinglePost({id, noImage}: Props) {

  const { data: post, error } = useQuery<IPost, Object, IPost, [_1: string, _2: string]>({
    queryKey: ['posts', id],
    queryFn: getSinglePost,
    staleTime: 60*1000, //default 0ms (fresh => stale time)
    gcTime: 5*60*1000, //default 5*60*1000 ms (5분)
  });


  if(error) {
    return (
      <div style={{
        height: 100,
        alignItems: 'center',
        fontSize: 31,
        fontWeight: 'bold',
        justifyContent: 'center',
        display: 'flex'
      }}
      >
        게시글을 찾을 수 없습니다.</div>
    )
  }

  if(!post) {
    //로딩중
    return null; 
  }
  return <Post key={post.postId} post={post} noImage={noImage} />
}
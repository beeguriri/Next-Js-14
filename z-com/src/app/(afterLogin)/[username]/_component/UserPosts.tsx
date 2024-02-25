"use client";

import { Post as IPost} from '@/model/post';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import getUserPosts from '../_lib/getUserPosts';
import Post from '../../_component/Post';

type Props = {
  username: string,
}

export default function UserPosts({username}: Props) {

  const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, _3: string]>({
    queryKey: ['posts', 'users', username],
    queryFn: getUserPosts,
    staleTime: 60*1000, //default 0ms (fresh => stale time)
    gcTime: 5*60*1000, //default 5*60*1000 ms (5분)
  });

  const queryCLient = useQueryClient();
  const user = queryCLient.getQueryData(['users', username]);

  if (user)
    return data?.map((post) => <Post key={post.postId} post={post} />);

}
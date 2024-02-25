"use client";

import { useQuery } from "@tanstack/react-query";
import getPostRecommaends from "../_lib/getPostRecommaends";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommaends,
    staleTime: 60*1000, //default 0ms (fresh => stale time)
    gcTime: 5*60*1000, //default 5*60*1000 ms (5분)
  });

  return data?.map((post) =>
    <Post key={post.postId} post={post} />
  )
}
"use client";

import { useQuery } from "@tanstack/react-query";
import getPostRecommaends from "../_lib/getPostRecommaends";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommaends
  });

  return data?.map((post) =>
    <Post key={post.postId} post={post} />
  )
}
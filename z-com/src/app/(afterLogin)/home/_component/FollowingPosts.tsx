"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import getFollowingPosts from "../_lib/getFollowingPosts";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";
import styles from '../home.module.css';

export default function FollowingPosts() {
  const { data } = useSuspenseQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60*1000, //default 0ms (fresh => stale time)
    gcTime: 5*60*1000, //default 5*60*1000 ms (5분)
  });

  // if (isPending) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center' }}>
  //     <svg className={styles.loader} height="100%" viewBox="0 0 32 32" width={40} >
  //       <circle cx="16" cy="16" fill="none" r="14" strokeWidth="4"
  //         style={{ stroke: 'rgb(29, 155, 240)', opacity: 0.2 }}></circle>
  //       <circle cx="16" cy="16" fill="none" r="14" strokeWidth="4"
  //         style={{ stroke: 'rgb(29, 155, 240)', strokeDasharray: 80, strokeDashoffset: 60 }}></circle>
  //     </svg>
  //   </div>
  //   )
  // }

  return data?.map((post) =>
    <Post key={post.postId} post={post} />
  )
}
"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";
import getSearchResults from "../_lib/getSearchResult"

type Props = {
  searchParams: {
    q: string,
    f?: string,
    pf?: string,
  }
}

export default function SearchResult ({searchParams}:Props) {
  //dynamic query key 사용 할 때
  const { data } = useQuery<IPost[], Object, IPost[], 
                            [_1: string, _2: string, Props['searchParams']]
                            >({
    queryKey: ['posts', 'search', searchParams],
    queryFn: getSearchResults,
    staleTime: 60*1000, //default 0ms (fresh => stale time)
    gcTime: 5*60*1000, //default 5*60*1000 ms (5분)
  });

  return data?.map((post) =>
    <Post key={post.postId} post={post} />
  )
}
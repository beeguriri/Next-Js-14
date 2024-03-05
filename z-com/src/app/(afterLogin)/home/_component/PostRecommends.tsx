"use client";

import { InfiniteData, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import getPostRecommaends from "../_lib/getPostRecommaends";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";

//useInfiniteQuery의 구조: 2차원배열
//[[1,2,3,4,5], [6,7,8,9,10], [11, 12]] => 3번 호출
//[[1,2,3,4,5], [6,7,8,9,10], [11, 12, 13, 14, 15]] => 4번 호출
//isFetching : react query가 데이터를 가져오는 순간인지 감지하는 파라미터
//같은 컴포넌트 내에서는 스크롤 복원이 됨!!
export default function PostRecommends() {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string], number>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommaends,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    staleTime: 60 * 1000, //default 0ms (fresh => stale time)
    gcTime: 5 * 60 * 1000, //default 5*60*1000 ms (5분)
  });

  //인피니티 스크롤 구현을 위한 react-intersection-observer
  const { ref, inView } = useInView({
    //div 태그 보이자 마자 호출하기 위하여
    threshold: 0, //몇픽셀 후 호출
    delay: 0, //몇초 후 호출
  });

  useEffect(() => {
    if (inView) {
      //데이터를 가져오는중이 아니면서
      //다음 페이지가 있을 때
      //다음 페이지를 가져옴!
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isFetching])

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((post) => <Post key={post.postId} post={post} />)}
        </Fragment>
      ))}
      <div ref={ref} style={{height: 50}} />
    </>
  )
}
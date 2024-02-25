import { Post } from "@/model/post";
import { QueryFunction } from "@tanstack/react-query";

const getSearchResults: QueryFunction<Post[], [_1: string, _2: string, 
                                               searchParams: {q: string, f?: string, pf?: string,}]> 
                      = async ({queryKey}) => {

  const [ _1, _2, searchParams ] = queryKey;
  const response = await fetch(
    `http://localhost:9090/api/search/${searchParams.toString()}`, 
    {
      next: {
        //리액트 쿼리는 객체가 들어갈 수 있는데
        //넥스트 쿼리는 객체가 들어갈 수 없어서 문자열을 넣어줘야 함
        tags: ['posts', 'search', searchParams.q],
      },
      cache: 'no-store', //cache 정책
    }
  );

  console.log(response);

  if(!response.ok)
    throw new Error('failed to fetch data');

  return response.json();
}

export default getSearchResults;
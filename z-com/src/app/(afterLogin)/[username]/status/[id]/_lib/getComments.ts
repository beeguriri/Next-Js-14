import { Post } from "@/model/Post";
import { QueryFunction } from "@tanstack/react-query";

const getComments: QueryFunction<Post[], [_1: string, _2: string, _3: string]> 
    = async({ queryKey }) => {

  const [_1, id] = queryKey;
  const response = await fetch(
    `http://localhost:9090/api/posts/${id}/comments`,
    {
      next: {
        tags: ['posts', id, 'comments'],
      },
      // cache: 'no-store',
    }
  );

  if(!response.ok)
    throw new Error('failed to fetch data');

  return response.json();
}

export default getComments;
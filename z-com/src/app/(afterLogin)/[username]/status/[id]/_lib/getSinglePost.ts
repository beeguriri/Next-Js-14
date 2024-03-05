import { Post } from "@/model/Post";
import { QueryFunction } from "@tanstack/react-query";

const getSinglePost: QueryFunction<Post, [_1: string, _2: string]> 
    = async({ queryKey }) => {

  const [_1, id] = queryKey;
  const response = await fetch(
    `http://localhost:9090/api/posts/${id}`,
    {
      next: {
        tags: ['posts', id],
      },
      // cache: 'no-store',
    }
  );

  if(!response.ok)
    throw new Error('failed to fetch data');

  return response.json();
}

export default getSinglePost;
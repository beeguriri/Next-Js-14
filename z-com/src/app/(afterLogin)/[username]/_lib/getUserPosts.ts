import { Post } from "@/model/Post";
import { QueryFunction } from "@tanstack/react-query";

const getUserPosts: QueryFunction<Post[], [_1: string, _2: string, string,]> 
    = async({ queryKey }) => {

  const [_1, _2, userId] = queryKey;
  const response = await fetch(
    `http://localhost:9090/api/users/${userId}/posts`,
    {
      next: {
        tags: ['posts', 'users', userId],
      },
      // cache: 'no-store',
    }
  );

  if(!response.ok)
    throw new Error('failed to fetch data');

  return response.json();
}

export default getUserPosts;
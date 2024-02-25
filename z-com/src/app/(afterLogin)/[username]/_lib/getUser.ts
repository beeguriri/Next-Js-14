import { User } from "@/model/User";
import { QueryFunction } from "@tanstack/react-query";

const getUser: QueryFunction<User, [_1: string, _2: string]> 
    = async({ queryKey }) => {

  const [_1, userId] = queryKey;
  const response = await fetch(
    `http://localhost:9090/api/users/${userId}`,
    {
      next: {
        tags: ['users', userId],
      },
      cache: 'no-store',
    }
  );

  if(!response.ok)
    throw new Error('failed to fetch data');

  return response.json();
}

export default getUser;
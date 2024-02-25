"use client";

import { User } from '@/model/User';
import getFollowRecommends from '../_lib/getFollowRecommends';
import RecommendUser from './RecommendUser';
import style from './followRecommendSection.module.css';
import { useQuery } from '@tanstack/react-query';

export default function FollowRecommendSection() {

  const { data } = useQuery<User[]>({
    queryKey: ['users', 'followRecommends'],
    queryFn: getFollowRecommends,
    staleTime: 60*1000, //default 0ms (fresh => stale time)
    gcTime: 5*60*1000, //default 5*60*1000 ms (5분)
  });

  return (
    <div>
      <div className={style.followRecommend}>
          <h3>팔로우 추천</h3>
          {data?.map((user) => <RecommendUser key={user.id} user={user} />)}
      </div>
    </div>
  );
}
"use client";

import { usePathname } from 'next/navigation';
import Trend from './Trend';
import style from './trendSection.module.css';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import getTrends from '../_lib/getTrends';
import { Hashtag } from '@/model/Hashtag';

export default function TrendSection() {

  const pathName = usePathname();
  const { data: session } = useSession();

  const { data } = useQuery<Hashtag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60*1000, //default 0ms (fresh => stale time)
    gcTime: 5*60*1000, //default 5*60*1000 ms (5분)
    enabled: !session?.user, //사용자가 있을때만 trend 가져옴
  });

  if (pathName === '/explore') return null;
  if (session?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          {data?.map((trend) => <Trend key={trend.tagId} trend={trend}/>)}
        </div>
      </div>
    );
  };

  return (
    <div className={style.trendBg}>
      <div className={style.noTrend}>
        트렌드를 가져올 수 없습니다.
      </div>
    </div>
  );
}
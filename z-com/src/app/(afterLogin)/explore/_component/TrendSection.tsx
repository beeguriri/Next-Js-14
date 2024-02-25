"use client";

import Trend from "../../_component/Trend";
import { Hashtag } from '@/model/Hashtag';
import { useQuery } from '@tanstack/react-query';
import getTrends from "../../_lib/getTrends";

export default function TrendSection() {

  const { data } = useQuery<Hashtag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60*1000, //default 0ms (fresh => stale time)
    gcTime: 5*60*1000, //default 5*60*1000 ms (5분)
  });

  return data?.map((trend) => <Trend key={trend.tagId} trend={trend}/>);
  
}
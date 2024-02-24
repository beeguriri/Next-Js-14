"use client";

import { usePathname } from 'next/navigation';
import Trend from './Trend';
import style from './trendSection.module.css';
import { useSession } from 'next-auth/react';

export default function TrendSection() {

  const pathName = usePathname();
  const { data } = useSession();

  if (pathName === '/explore') return null;
  if (data?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          {/* TODO : 서버에서 데이터 불러와서 map으로 쓸거임! */}
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
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
"use client";

import { useState } from 'react';
import style from './tab.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Tab() {

  const [current, setCurrent] = useState('new');
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickHot = () => {
    setCurrent('hot');
    router.replace(`/search?q=${searchParams.get('q')}`);
  };

  const onClickNew = () => {
    setCurrent('new');
    router.replace(`/search?q=${searchParams.get('q')}&f=live`);
  };

  const onClickUser = () => {
    setCurrent('user');
    router.replace(`/search?q=${searchParams.get('q')}&f=user`);
  };

  const onClickMedia = () => {
    setCurrent('media');
    router.replace(`/search?q=${searchParams.get('q')}&f=media`);
  };

  const onClickList = () => {
    setCurrent('list');
    router.replace(`/search?q=${searchParams.get('q')}&f=list`);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current !== 'hot'}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current !== 'new'}></div>
        </div>
        <div onClick={onClickUser}>
          사용자
          <div className={style.tabIndicator} hidden={current !== 'user'}></div>
        </div>
        <div onClick={onClickMedia}>
          미디어
          <div className={style.tabIndicator} hidden={current !== 'media'}></div>
        </div>
        <div onClick={onClickList}>
          리스트
          <div className={style.tabIndicator} hidden={current !== 'list'}></div>
        </div>
      </div>
    </div>
  )
}
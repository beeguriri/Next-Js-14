"use client";

import { useState } from 'react';
import style from './tab.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Tab() {

  const [current, setCurrent] = useState('new');
  const router = useRouter();
  const searchParams = useSearchParams();
  let url;

  const onClickHot = () => {
    setCurrent('hot');
    url = `/search?q=${searchParams.get('q')}`;
    if (searchParams.has('pf'))
      url += `&pf=${searchParams.get('pf')}`
    router.replace(url);
  };

  const onClickNew = () => {
    setCurrent('new');
    url = `/search?q=${searchParams.get('q')}&f=live`;
    if (searchParams.has('pf'))
      url += `&pf=${searchParams.get('pf')}`
    router.replace(url);
  };

  const onClickUser = () => {
    setCurrent('user');
    url = `/search?q=${searchParams.get('q')}&f=user`;
    if (searchParams.has('pf'))
      url += `&pf=${searchParams.get('pf')}`
    router.replace(url);
  };

  const onClickMedia = () => {
    setCurrent('media');
    url = `/search?q=${searchParams.get('q')}&f=media`;
    if (searchParams.has('pf'))
      url += `&pf=${searchParams.get('pf')}`
    router.replace(url);
  };

  const onClickList = () => {
    setCurrent('list');
    url = `/search?q=${searchParams.get('q')}&f=list`;
    if (searchParams.has('pf'))
      url += `&pf=${searchParams.get('pf')}`
    router.replace(url);
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
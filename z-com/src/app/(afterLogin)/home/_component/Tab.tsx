"use client";

import { useState } from 'react';
import style from './tab.module.css';

export default function Tab () {

  //tab을 누르면 post에 영향을 끼치므로 
  //상태관리가 들어가야해서
  //context api 사용 해보기!!
  const [tab, setTab] = useState('recommend');

  const onClickRecommend = () => {
    setTab('recommend');
  };
  const onClickFollow = () => {
    setTab('follow');
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickRecommend}>
          추천
          <div className={style.tabIndicator} hidden={tab === 'follow'}></div>
        </div>
        <div onClick={onClickFollow}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === 'recommend'}></div>
        </div>
      </div>
    </div>
  );
}
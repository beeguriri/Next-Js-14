"use client";

import { faker } from '@faker-js/faker';
import style from './room.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { useRouter } from 'next/navigation';

//dayjs 플러그인 추가해주기
dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Room() {

  const router = useRouter();

  const onclick = () => {
    // messages/[roomId] 존재함!
    router.push(`/messages/${user.messages.at(-1)?.roomId}`);
  };

  const user = {
    id: 'hero',
    nickname: '영웅',
    messages: [
     {roomId: 1, content: '안녕하세요', createdAt: new Date()},
     {roomId: 1, content: '안녕히가세요', createdAt: new Date()},
    ]
  }

  return (
    <div className={style.room} onClickCapture={onclick}>
        <div className={style.roomUserImage}>
          <img src={faker.image.avatar()} />
        </div>
        <div className={style.roomChatInfo}>
          <div className={style.roomUserInfo}>
            <b>{user.nickname}</b>
            &nbsp;
            <span className={style.postUserId}>@{user.id}</span>
            &nbsp;
            ·
            &nbsp;
            <span className={style.postDate}>{dayjs(user.messages?.at(-1)?.createdAt).fromNow(true)}</span>
          </div>
          <div className={style.roomLastChat}>
            {user.messages?.at(-1)?.content}
          </div>
        </div>
    </div>
  )
}
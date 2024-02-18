import { faker } from "@faker-js/faker"
import style from './chatRoom.module.css';
import BackButton from "../../_component/BackButton";
import Link from "next/link";
import cx from "classnames";
import dayjs from "dayjs";
import 'dayjs/locale/ko';

dayjs.locale('ko');

export default function ChatRoom() {

  const user = {
    id: 'hero',
    nickname: '영웅',
    image: faker.image.avatar(),
  }

  const messages = [
    { messageId: 1, roomId: 123, id: 'beeguri', content: '안녕하세요', createdAt: new Date() },
    { messageId: 2, roomId: 123, id: 'hero', content: '안녕?!', createdAt: new Date() },
  ]

  //젤 윗줄에 보낸사람 프로필이 나오고 (내가 나에게 보낸 쪽지는 내프로필 나옴)
  //그 아래에 각각 채팅 말풍선이 나옴
  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <div><h2>{user.nickname}</h2></div>
      </div>
      <Link href={`/${user?.id}`} className={style.userInfo}>
        <img src={user.image} alt={user.id} />
        <div><b>{user.nickname}</b></div>
        <div>@{user.id}</div>
      </Link>
      <div className={style.list}>
        {messages.map((m) => {
          //내 메시지면
          if (m.id === 'beeguri') {
            return (
              <div key={m.messageId} className={cx(style.message, style.myMessage)}>
                <div className={style.content}>{m.content}</div>
                <div className={style.date}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A h:mm')}</div>
              </div>
            );
          }
          //상대 메시지면
          return (
            <div key={m.messageId} className={cx(style.message, style.yourMessage)}>
              <div className={style.content}>{m.content}</div>
              <div className={style.date}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A h:mm')}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
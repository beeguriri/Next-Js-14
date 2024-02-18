import { faker } from '@faker-js/faker';
import style from './message.module.css';
import Room from './_component/Room';

export default function Page() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  )
}

//https://twitter.com/messages
//클릭하면 https://twitter.com/messages/[roomId]
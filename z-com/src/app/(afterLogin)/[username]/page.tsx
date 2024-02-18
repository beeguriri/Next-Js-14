import BackButton from '../_component/BackButton';
import Post from '../_component/Post';
import style from './profile.module.css';

export default function Profile() {

  // 임시로 내 정보 있는것처럼
  const me = { 
    id: 'beeguri',
    nickname: '비그링',
    image: '/profile.jpg',
  }

  //백버튼, 아이디, 게시물 수
  //프로필 사진
  //아이디와 닉네임
  //가입일
  //...
  //게시물 관련
  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{me.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={me.image} alt={me.id} />
        </div>
        <div className={style.userName}>
          <div>{me.nickname}</div>
          <div>@{me.id}</div>
        </div>
        <button className={style.followButton}>프로필 설정하기</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}

//https://twitter.com/[userName]
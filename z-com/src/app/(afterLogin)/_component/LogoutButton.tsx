"use client";

import style from "./logoutButton.module.css";

export default function LogoutButton() {
  const me = { // 임시로 내 정보 있는것처럼
    id: 'beeguri',
    nickname: '비그링',
    image: '/profile.jpg',
  }

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        {/* TODO: 백엔드 서버에서 불러올거라서 넥스트js의 Image 태그 안썼음! */}
        {/* 클라이언트 서버의 public 폴더에서 불러올거라면 Image 태그 쓰면 됨!! */}
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  )
}
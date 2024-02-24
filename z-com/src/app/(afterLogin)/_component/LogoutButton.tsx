"use client";

import { signOut, useSession } from "next-auth/react";
import style from "./logoutButton.module.css";
import { useRouter } from "next/navigation";

export default function LogoutButton() {

  const router = useRouter();

  const { data: me } = useSession(); //클라이언트 사이드에서만 쓸 수 있음

  const onLogout = () => {
    signOut({
      redirect: false,
    }).then(() => {
      router.replace('/');
    })
  };

  if (!me?.user) return null;

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        {/* TODO: 백엔드 서버에서 불러올거라서 넥스트js의 Image 태그 안썼음! */}
        {/* 클라이언트 서버의 public 폴더에서 불러올거라면 Image 태그 쓰면 됨!! */}
        <img src={me.user?.image!} alt='' />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  )
}
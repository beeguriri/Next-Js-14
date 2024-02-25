"use client";

import style from '../profile.module.css';
import BackButton from "../../_component/BackButton";
import { useQuery } from '@tanstack/react-query';
import getUser from '../_lib/getUser';
import { User } from '@/model/User';

type Props = {
  username: string,
}

export default function UserInfo({username}: Props) {

  const { data: user } = useQuery<User, Object, User, [_1: string, _2: string]>({
    queryKey: ['users', username],
    queryFn: getUser,
    staleTime: 60*1000, //default 0ms (fresh => stale time)
    gcTime: 5*60*1000, //default 5*60*1000 ms (5분)
  });

  //로딩 될 때 시간 걸릴 수 있으니까
  if(!user) return null;

  return (
    <>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>프로필 설정하기</button>
      </div>
    </>
  )
}
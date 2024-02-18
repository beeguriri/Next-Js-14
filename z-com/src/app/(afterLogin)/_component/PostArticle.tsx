"use client";

import { ReactNode } from "react";
import style from "./post.module.css";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode,
  post: {
    postId: number,
    content: string,
    user: {
      id: string,
      nickname: string,
      image: string,
    },
    createdAt: Date,
    //todo : 나중에 type 변경해야지!
    images: any[],
  }
}

export default function PostArticle({children, post}:Props) {

  const router = useRouter();

  //상세페이지로 이동
  const onClick = () => {
    router.push(`/${post.user.id}/status/${post.postId}`)
  };

  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  )
}
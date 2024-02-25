"use client";

import { ReactNode } from "react";
import style from "./post.module.css";
import { useRouter } from "next/navigation";
import { Post } from "@/model/post";

type Props = {
  children: ReactNode,
  post: Post,
}

export default function PostArticle({children, post}:Props) {

  const router = useRouter();

  //상세페이지로 이동
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`)
  };

  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  )
}
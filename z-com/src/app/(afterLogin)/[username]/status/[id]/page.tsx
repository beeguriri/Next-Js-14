import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from "./singlePost.module.css";
import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "./_component/CommentForm";


// 원본 게시글
// 답글 게시하기
// 답글
export default function SinglePost() {
  return (
    <div className={style.main}>
      {/* 헤더 영역 */}
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      {/* 원본게시글 */}
      <div style={{ marginTop: 60}}>
        <Post />
      </div>
      {/* comment 폼 */}
      <CommentForm />
      {/* comment list => 얘도 post임 */}
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

//https://twitter.com/[userName]/status/[postID]
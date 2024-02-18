//링크가 여러개 붙어있는 페이지!

import Link from 'next/link';
import style from './post.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

//dayjs 플러그인 추가해주기
dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Post () {

  //dummy data
  const target = {
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/elon_temp.jpg',
    },
    content: '여기에 내용이 들어가요! 내용을 어디한번 길게게 140자 넘게 써볼까요? 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬',
    createdAt: new Date(),
    Images: [],
  }

  //왼쪽에 프로필 사진
  //오른쪽 영역에는 이제
  //닉네임 - 아이디 - 지금으로부터 몇분전에 게시했는지 시간 나오고
  //닉네임 클릭하면 프로필
  //몇분전 부터 모든 영역 클릭하면 https://twitter.com/[userId]/status/[postId]
  //본문 나오고
  //이미지 나오고
  return (
    <article className={style.post}>
      <div className={style.postWrapper}>
        {/* 유저 프로필 사진 영역 => 클릭하면 해당 유저의 프로필로 감 */}
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        {/* 본문 영역 */}
        <div className={style.postBody}>
          {/* 닉네임 - 아이디 - 지금으로부터 몇분전에 게시했는지 */}
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp;
              ·
              &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          {/* 플레인 텍스트 */}
          <div>{target.content}</div>
          {/* 이미지 영역 */}
          <div className={style.postImageSection}></div>
          {/* ⬇️ 댓글, 리트윗, 마음, 본사람, 북마크, 공유하기 버튼 영역 */}
          
        </div>
      </div>
    </article>
  );
}
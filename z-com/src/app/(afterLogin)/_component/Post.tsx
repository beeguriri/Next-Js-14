//링크가 여러개 붙어있는 페이지!

import Link from 'next/link';
import style from './post.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from './ActionButtons';
import PostArticle from './PostArticle';
import { faker } from '@faker-js/faker';

//dayjs 플러그인 추가해주기
dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
 noImage?: boolean 
}

export default function Post({noImage}:Props) {

  //dummy data
  const target = {
    user: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/elon_temp.jpg',
    },
    postId: 1,
    content: '여기에 내용이 들어가요! 내용을 어디한번 길게게 140자 넘게 써볼까요? 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬 안녕 디지몬',
    createdAt: new Date(),
    images: [] as any,
  }

  if(Math.random() > 0.5 && !noImage)
    target.images.push({imageId: 1, link: faker.image.urlLoremFlickr()})

  //왼쪽에 프로필 사진
  //오른쪽 영역에는 이제
  //닉네임 - 아이디 - 지금으로부터 몇분전에 게시했는지 시간 나오고
  //닉네임 클릭하면 프로필
  //몇분전 부터 모든 영역 클릭하면 https://twitter.com/[userId]/status/[postId]
  //본문 나오고
  //이미지 나오고
  return (
    // ⭐부모는 클라이언트 컴포넌트, 자식은 서버 컴포넌트 일때⭐
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        {/* 유저 프로필 사진 영역 => 클릭하면 해당 유저의 프로필로 감 */}
        <div className={style.postUserSection}>
          <Link href={`/${target.user.id}`} className={style.postUserImage}>
            <img src={target.user.image} alt={target.user.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        {/* 본문 영역 */}
        <div className={style.postBody}>
          {/* 닉네임 - 아이디 - 지금으로부터 몇분전에 게시했는지 */}
          <div className={style.postMeta}>
            <Link href={`/${target.user.id}`}>
              <span className={style.postUserName}>{target.user.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.user.id}</span>
              &nbsp;
              ·
              &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          {/* 플레인 텍스트 */}
          <div>{target.content}</div>
          {/* 이미지 영역 */}
          <div className={style.postImageSection}>
            {target.images && target.images.length > 0 && (
              // 이미지를 클릭하면 https://twitter.com/[userId]/status/[postId]/photo/[imageId]
              <Link href={`/${target.user.id}/status/${target.postId}/photo/${target.images[0].imageId}`}
               className={style.postImageSection}
              >
                <img src={target.images[0]?.link} alt='' />
              </Link>
            )}
          </div>
          {/* ⬇️ 댓글, 리트윗, 마음, 본사람, 북마크, 공유하기 버튼 영역 */}
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
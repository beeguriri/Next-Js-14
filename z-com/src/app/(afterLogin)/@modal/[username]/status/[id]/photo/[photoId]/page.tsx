import Post from '@/app/(afterLogin)/_component/Post';
import PhotoModalCloseButton from './_component/PhotoModalCloseButton';
import style from './photoModal.module.css';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm';
import { faker } from '@faker-js/faker';
import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';

//화면 삼분할
//첫번째 분할에 버튼
//두번째 분할에 사진 및 action buttons
//세번쨰 분할에 사진 없는 포스트, action buttons, comment form, 답글 목록들
export default function PhotoModal() {

  const target = {
    imageId: 1, 
    link: faker.image.urlLoremFlickr(),
  }

  return (
    <div className={style.container}>
      {/* 닫기 버튼 */}
      <PhotoModalCloseButton />
      {/* 이미지 영역 */}
      <div className={style.imageZone}>
        <img src={target.link} />
        <div className={style.image} style={{backgroundImage: `url(${target.link})`}} />
        <div className={style.buttonZone}>
          <div className={style.buttonInner}>
            <ActionButtons photoModal />
          </div>
        </div>
      </div>

      {/* ⬇️ TODO: 오른쪽 모달 닫는 용도의 버튼 */}

      {/* 오른쪽 영역 */}
      <div className={style.commentZone}>
        <Post noImage />
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
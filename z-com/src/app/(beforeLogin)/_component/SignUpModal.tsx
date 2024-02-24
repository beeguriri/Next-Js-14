"use client";

import BackButton from './BackButton';
import style from './signup.module.css';
import onSubmit from '../_lib/signUp';
import { useFormState, useFormStatus } from 'react-dom';

function showMessage(messasge: string | undefined | null) {
  if (messasge === 'no_id') {
    return '아이디를 입력하세요.';
  }
  if (messasge === 'no_name') {
    return '닉네임을 입력하세요.';
  }
  if (messasge === 'no_password') {
    return '비밀번호를 입력하세요.';
  }
  if (messasge === 'no_image') {
    return '이미지를 업로드하세요.';
  }
  if (messasge === 'user_exists') {
    return '이미 사용 중인 아이디입니다.';
  }
  return '';
}

export default function SignupModal() {

  //클랑이언트 컴포넌트에서 서버액션 사용하기

  const [state, formAction] = useFormState(onSubmit, {message: null}); //응답값에 따라 에러메시지 표기
  const { pending } = useFormStatus();

  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <div>계정을 생성하세요.</div>
            <BackButton />
          </div>
          <form action={formAction}>
            <div className={style.modalBody}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="id">아이디</label>
                {/* form data를 그대로 사용하기 위해 name 속성이 필요 */}
                <input id="id" name="id" className={style.input} type="text" placeholder="" required />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="name">닉네임</label>
                <input id="name" name="name" className={style.input} type="text" placeholder="" required />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="password">비밀번호</label>
                <input id="password" name="password" className={style.input} type="password" placeholder="" required />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="image">프로필</label>
                <input id="image" name="image" className={style.input} type="file" accept="image/*" required />
              </div>
            </div>
            <div className={style.modalFooter}>
              <div className={style.error}>{showMessage(state?.message)}</div>
              <button type="submit" className={style.actionButton} disabled={pending}>가입하기</button>
            </div>
          </form>
        </div>
      </div>
    </>)
}
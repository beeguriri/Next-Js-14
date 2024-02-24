import BackButton from './BackButton';
import style from './signup.module.css';

export default function SignupModal() {

  //서버 액션
  const submit = async(formData : FormData) => {
    "use server";
    //클라이언트에 노출되지 않기때문에, 키 값 등을 넣어놓을 수 있음
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, 
      {
        method: 'post',
        body: formData,
        //쿠키를 헤더에 전달
        credentials: 'include',
      }
    )
  }

  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <div>계정을 생성하세요.</div>
            <BackButton />
          </div>
          <form action={submit}>
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
              <button type="submit" className={style.actionButton}>가입하기</button>
            </div>
          </form>
        </div>
      </div>
    </>)
}
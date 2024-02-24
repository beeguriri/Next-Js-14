"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

const signUp = async(prevState: any, formData: FormData) => {

  let isPossibleRedirect = false;

  //form data 검증
  if (!formData.get('id') || !(formData.get('id') as string).trim()) return { message: 'no_id' };
  if (!formData.get('name') || !(formData.get('name') as string).trim()) return { message: 'no_name' };
  if (!formData.get('password') || !(formData.get('password') as string).trim()) return { message: 'no_password' };
  if (!formData.get('image')) return { message: 'no_image' };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: 'post',
        body: formData,
        //쿠키를 헤더에 전달
        credentials: 'include',
      }
    );
    console.log("정상응답");
    console.log(response.status);

    if (response.status === 403) {
      console.log("403 에러 떴어!! 메시지 보여줘!!");
      return { message: 'user_exists' };
    }

    isPossibleRedirect = true;

    //회원가입 성공 후 로그인 까지 처리
    await signIn("credentials", {
      username: formData.get('id'),
      password: formData.get('password'),
      redirect: false,
    }); 

  } catch (err) {
    console.log(err);
    return {message : null};
  }

  //redirect는 try-catch 문안에서 사용하면 안됨!!!!!!
  if (isPossibleRedirect) {
    redirect('/home');
  }
}

export default signUp;